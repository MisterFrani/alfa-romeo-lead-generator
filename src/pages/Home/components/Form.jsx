import React, { useState, useEffect, useCallback } from "react";
import { searchCities } from "../../../network/geoGov";
import { sendLead } from "../../../network/zapier";
import CardFormSelection from "../../../components/Form/FormSelectionCard";
import { DATA_STEPS } from "../../../shared/constants";
import ConfirmForm from "./ConfirmForm";
import SuccessMessageWidget from "../../../components/SuccessMessageWidget";
import FormInputCard from "../../../components/Form/FormInputCard";

const INITIAL_FORM_DATA = {
  modelType: "",
  interestedIn: "",
  purchaseType: "",
  leaseDuration: "",
  firstName: "",
  lastName: "",
  postalCode: "",
  phone: "",
  city: "",
};

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState({});
  const [showCityConfirmation, setShowCityConfirmation] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showCityConfirmation ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showCityConfirmation]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
  };

  const validateStep = useCallback(
    (currentStep) => {
      const newErrors = {};
      if (currentStep === 4) {
        if (!formData.firstName) newErrors.firstName = true;
        if (!formData.lastName) newErrors.lastName = true;
        if (!formData.postalCode || !/^\d{5}$/.test(formData.postalCode)) {
          newErrors.postalCode = true;
        }
        if (!formData.phone || !/^0\d{9}$/.test(formData.phone)) {
          newErrors.phone = true;
        }
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    },
    [formData]
  );

  const handleNext = () => {
    if (validateStep(step)) {
      if (step < 4) {
        setStep((prevStep) => prevStep + 1);
      } else {
        fetchCity();
      }
    }
  };

  const fetchCity = async () => {
    try {
      const resCities = await searchCities(
        new URLSearchParams({ codePostal: formData.postalCode })
      );
      const cities = await resCities.json();
      if (cities.length > 0) {
        setFormData((prevData) => ({
          ...prevData,
          city: { name: cities[0].nom, code: cities[0].codeDepartement },
        }));
        setShowCityConfirmation(true);
      }
    } catch (error) {
      console.error("Failed to fetch city data:", error);
    }
  };

  const handleSubmit = async () => {
    const payload = {
      data: {
        type_modele: formData.modelType?.label,
        achat_ou_leasing: formData.interestedIn?.label,
        vehicule_neuf_ou_location: formData.purchaseType?.label,
        nom: formData.lastName,
        prenom: formData.firstName,
        ville: formData.city.name,
        telephone: `+33${formData.phone.slice(1)}`,
        duree_leasing: formData.leaseDuration
          ? `${formData.leaseDuration.value}M`
          : null,
      },
    };

    try {
      await sendLead(import.meta.env.VITE_LEAD_EMAIL, payload);
      setShowSuccessMessage(true);
      setShowCityConfirmation(false);
    } catch (error) {
      console.error("Failed to send lead:", error);
    }
  };

  const handleSelection = (field, value, currentStep) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [field]: false }));
    setStep(currentStep + 1);
  };

  const renderStep = () => {
    const data = DATA_STEPS.find((stepData) => stepData.step === step);
    if (!data) return;

    const customData = data.createData ? data.createData(formData) : data;
    let currentScreen = "selection";

    if (data.step === 4) {
      currentScreen = "input";
    }
    return (
      <div>
        {currentScreen === "input" ? (
          <>
            <FormInputCard
              data={{
                ...customData,
                options: customData.options.map((option) => ({
                  ...option,
                  defaultValue: formData[option.value],
                })),
              }}
              handleInputChange={handleInputChange}
              errors={errors}
            />
          </>
        ) : (
          <CardFormSelection
            data={customData}
            currentStep={data.step}
            handleSelection={handleSelection}
          />
        )}
      </div>
    );
  };

  if (showSuccessMessage) {
    return (
      <SuccessMessageWidget>
        <h2 className="mb-4">Votre réservation a bien été prise en compte.</h2>
        <p className="mb-4">
          Vous serez contacté dans
          <span className="underline ml-2">un délai de 48H.</span>
        </p>
        <p className="mt-44 md:mt-60 md:text-right">
          L&apos;équipe Alfa Romeo, vous remercie.
        </p>
      </SuccessMessageWidget>
    );
  }

  return (
    <div className="min-h-[470px] md:min-h-[520px] pb-5">
      {showCityConfirmation && (
        <ConfirmForm
          city={formData.city}
          handleClose={() => setShowCityConfirmation(false)}
          handleConfirm={handleSubmit}
        />
      )}
      <div className="bg-[#5B4747] bg-opacity-[0.1] backdrop-filter backdrop-blur-lg text-white p-6 md:py-12 md:px-10 w-full md:w-[618px] rounded-lg">
        {renderStep()}

        {step === 4 && (
          <div className="mt-6 flex justify-center md:justify-center">
            <button
              onClick={handleNext}
              className="h-[56px] text-[20px] w-[210px] bg-alfaRed hover:bg-alfaRedDark px-4 py-2 rounded-[20px] font-bold ml-0 uppercase transition-colors duration-300"
            >
              Continuer
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
