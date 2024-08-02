import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Form = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const indiaCountryId = 101; // Ensure this is the correct ID for India

  const [countryId, setCountryId] = useState(indiaCountryId);
  const [stateId, setStateId] = useState(0);

  const [formData, setFormData] = useState({
    Name: "",
    Phone: "",
    SolarFor: "",
    Pincode: "",
    City: "",
    State: "",
    Remark: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Reset state and city when country changes
    setCountryId(indiaCountryId);
    setStateId(0);
    setFormData((prev) => ({
      ...prev,
      City: "", // Clear city selection
      State: "", // Clear state selection
    }));
  }, [indiaCountryId]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "Name" && !/^[a-zA-Z\s]*$/.test(value)) {
      setErrors({
        ...errors,
        [name]: "Name must contain only letters and spaces",
      });
    } else if (name === "Phone" && !/^[\d\s]*$/.test(value)) {
      setErrors({
        ...errors,
        [name]: "Phone Number must contain only digits",
      });
    } else if (name === "Pincode" && !/^\d*$/.test(value)) {
      setErrors({
        ...errors,
        [name]: "Pincode must contain only numbers",
      });
    } else {
      setErrors({
        ...errors,
        [name]: "",
      });
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (!formData.Name.trim()) {
      newErrors.Name = "Name is required";
      valid = false;
    } else if (!/^[a-zA-Z\s]*$/.test(formData.Name)) {
      newErrors.Name = "Name must contain only letters and spaces";
      valid = false;
    }
    if (!formData.State.trim()) {
      newErrors.State = "State is required";
      valid = false;
    } else if (!/^[a-zA-Z\s]*$/.test(formData.State)) {
      newErrors.State = "State must contain only letters and spaces";
      valid = false;
    }
    if (!formData.City.trim()) {
      newErrors.City = "City is required";
      valid = false;
    } else if (!/^[a-zA-Z\s]*$/.test(formData.City)) {
      newErrors.City = "City must contain only letters and spaces";
      valid = false;
    }

    if (!formData.Phone.trim()) {
      newErrors.Phone = "Phone Number is required";
      valid = false;
    } else if (!/^[\d\s]*$/.test(formData.Phone)) {
      newErrors.Phone = "Phone Number must contain only digits";
      valid = false;
    }

    if (!formData.SolarFor.trim()) {
      newErrors.SolarFor = "Please select an option for Solar For";
      valid = false;
    }

    // Pincode validation is now optional
    if (formData.Pincode && !/^\d*$/.test(formData.Pincode)) {
      newErrors.Pincode = "Pincode must contain only numbers";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx7EVqE_Zr93xS0kAVMoMoPyFflg38NTAEgw-x6blFk9jK0nqceI9FF65Vf7sRNEOcN0g/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            Name: formData.Name,
            Phone: formData.Phone,
            SolarFor: formData.SolarFor,
            Pincode: formData.Pincode,
            State: formData.State,
            City: formData.City,
            Remark: formData.Remark,
          }).toString(),
        }
      );

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          Name: "",
          Phone: "",
          SolarFor: "",
          Pincode: "",
          City: "",
          State: "",
          Remark: "",
        });
        setCountryId(indiaCountryId); // Reset country to India
        setStateId(0);
      } else {
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center bg-yellow-400 p-4">
      <div
        className="text-center md:text-left mb-6 md:mb-0 md:w-1/2"
        data-aos="fade-right"
      >
        <h1 className="text-black text-2xl md:text-5xl font-bold">
          Unlock the Benefits of Solar Energy with a No-Cost Consultation!
        </h1>
        <p className="text-black text-sm md:text-xl mt-4">
          Connect with our team for a comprehensive review of your solar
          options. Just valuable insights to help you make an informed decision.
          Reach out today!
        </p>
      </div>
      <div
        className="bg-white p-4 md:p-6 rounded-lg shadow-lg md:w-1/2"
        data-aos="fade-left"
      >
        <form className="space-y-2 md:space-y-3" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country<span className="text-red-500">*</span>
            </label>
            <select
              name="Country"
              value={countryId}
              onChange={(e) => setCountryId(parseInt(e.target.value, 10))}
              className={`mt-1 block w-full border border-gray-300 rounded-md p-1 md:p-2 ${
                errors.Country ? "border-red-500" : ""
              }`}
              required
            >
              <option value="India" selected>
                India
              </option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Åland Islands">Åland Islands</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="American Samoa">American Samoa</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antarctica">Antarctica</option>
              <option value="Antigua and Barbuda">Antigua and Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Aruba">Aruba</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bermuda">Bermuda</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bosnia and Herzegovina">
                Bosnia and Herzegovina
              </option>
              <option value="Botswana">Botswana</option>
              <option value="Bouvet Island">Bouvet Island</option>
              <option value="Brazil">Brazil</option>
              <option value="British Indian Ocean Territory">
                British Indian Ocean Territory
              </option>
              <option value="Brunei Darussalam">Brunei Darussalam</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Cape Verde">Cape Verde</option>
              <option value="Cayman Islands">Cayman Islands</option>
              <option value="Central African Republic">
                Central African Republic
              </option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Christmas Island">Christmas Island</option>
              <option value="Cocos (Keeling) Islands">
                Cocos (Keeling) Islands
              </option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo">Congo</option>
              <option value="Congo, The Democratic Republic of The">
                Congo, The Democratic Republic of The
              </option>
              <option value="Cook Islands">Cook Islands</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Cote D'ivoire">Cote D'ivoire</option>
              <option value="Croatia">Croatia</option>
              <option value="Cuba">Cuba</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Falkland Islands (Malvinas)">
                Falkland Islands (Malvinas)
              </option>
              <option value="Faroe Islands">Faroe Islands</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="French Guiana">French Guiana</option>
              <option value="French Polynesia">French Polynesia</option>
              <option value="French Southern Territories">
                French Southern Territories
              </option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Gibraltar">Gibraltar</option>
              <option value="Greece">Greece</option>
              <option value="Greenland">Greenland</option>
              <option value="Grenada">Grenada</option>
              <option value="Guadeloupe">Guadeloupe</option>
              <option value="Guam">Guam</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guernsey">Guernsey</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea-bissau">Guinea-bissau</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Heard Island and Mcdonald Islands">
                Heard Island and Mcdonald Islands
              </option>
              <option value="Holy See (Vatican City State)">
                Holy See (Vatican City State)
              </option>
              <option value="Honduras">Honduras</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="India" selected>
                India
              </option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran, Islamic Republic of">
                Iran, Islamic Republic of
              </option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Isle of Man">Isle of Man</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jersey">Jersey</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Korea, Democratic People's Republic of">
                Korea, Democratic People's Republic of
              </option>
              <option value="Korea, Republic of">Korea, Republic of</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Lao People's Democratic Republic">
                Lao People's Democratic Republic
              </option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libyan Arab Jamahiriya">
                Libyan Arab Jamahiriya
              </option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Macao">Macao</option>
              <option value="Macedonia, The Former Yugoslav Republic of">
                Macedonia, The Former Yugoslav Republic of
              </option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Martinique">Martinique</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mayotte">Mayotte</option>
              <option value="Mexico">Mexico</option>
              <option value="Micronesia, Federated States of">
                Micronesia, Federated States of
              </option>
              <option value="Moldova, Republic of">Moldova, Republic of</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Netherlands Antilles">Netherlands Antilles</option>
              <option value="New Caledonia">New Caledonia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Niue">Niue</option>
              <option value="Norfolk Island">Norfolk Island</option>
              <option value="Northern Mariana Islands">
                Northern Mariana Islands
              </option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau">Palau</option>
              <option value="Palestinian Territory, Occupied">
                Palestinian Territory, Occupied
              </option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Philippines">Philippines</option>
              <option value="Pitcairn">Pitcairn</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Qatar">Qatar</option>
              <option value="Reunion">Reunion</option>
              <option value="Romania">Romania</option>
              <option value="Russian Federation">Russian Federation</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Saint Helena">Saint Helena</option>
              <option value="Saint Kitts and Nevis">
                Saint Kitts and Nevis
              </option>
              <option value="Saint Lucia">Saint Lucia</option>
              <option value="Saint Pierre and Miquelon">
                Saint Pierre and Miquelon
              </option>
              <option value="Saint Vincent and The Grenadines">
                Saint Vincent and The Grenadines
              </option>
              <option value="Samoa">Samoa</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome and Principe">
                Sao Tome and Principe
              </option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Senegal">Senegal</option>
              <option value="Serbia">Serbia</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Singapore">Singapore</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="South Georgia and The South Sandwich Islands">
                South Georgia and The South Sandwich Islands
              </option>
              <option value="Spain">Spain</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Svalbard and Jan Mayen">
                Svalbard and Jan Mayen
              </option>
              <option value="Swaziland">Swaziland</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Syrian Arab Republic">Syrian Arab Republic</option>
              <option value="Taiwan">Taiwan</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania, United Republic of">
                Tanzania, United Republic of
              </option>
              <option value="Thailand">Thailand</option>
              <option value="Timor-leste">Timor-leste</option>
              <option value="Togo">Togo</option>
              <option value="Tokelau">Tokelau</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad and Tobago">Trinidad and Tobago</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Turks and Caicos Islands">
                Turks and Caicos Islands
              </option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="United States Minor Outlying Islands">
                United States Minor Outlying Islands
              </option>
              <option value="Uruguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Viet Nam">Viet Nam</option>
              <option value="Virgin Islands, British">
                Virgin Islands, British
              </option>
              <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
              <option value="Wallis and Futuna">Wallis and Futuna</option>
              <option value="Western Sahara">Western Sahara</option>
              <option value="Yemen">Yemen</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>
            {errors.Country && (
              <p className="text-red-500 text-xs">{errors.Country}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              className={`mt-1 block w-full border border-gray-300 rounded-md p-1 md:p-2 ${
                errors.Name ? "border-red-500" : ""
              }`}
              required
            />
            {errors.Name && (
              <p className="text-red-500 text-xs">{errors.Name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="Phone"
              value={formData.Phone}
              onChange={handleChange}
              className={`mt-1 block w-full border border-gray-300 rounded-md p-1 md:p-2 ${
                errors.Phone ? "border-red-500" : ""
              }`}
              required
            />
            {errors.Phone && (
              <p className="text-red-500 text-xs">{errors.Phone}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Want solar rooftop for?<span className="text-red-500">*</span>
            </label>
            <select
              name="SolarFor"
              value={formData.SolarFor}
              onChange={handleChange}
              className={`mt-1 block w-full border border-gray-300 rounded-md p-1 md:p-2 ${
                errors.SolarFor ? "border-red-500" : ""
              }`}
              required
            >
              <option value="">Select an option</option>
              <option value="home">Home</option>
              <option value="business">Office</option>
              <option value="other">Other</option>
            </select>
            {errors.SolarFor && (
              <p className="text-red-500 text-xs">{errors.SolarFor}</p>
            )}
          </div>

          <div className="flex gap-2 md:gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                State<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="State"
                value={formData.State}
                onChange={handleChange}
                className={`mt-1 block w-full border border-gray-300 rounded-md p-1 md:p-2 ${
                  errors.State ? "border-red-500" : ""
                }`}
              />
              {errors.State && (
                <p className="text-red-500 text-xs">{errors.State}</p>
              )}
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                City/District<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="City"
                value={formData.City}
                onChange={handleChange}
                className={`mt-1 block w-full border border-gray-300 rounded-md p-1 md:p-2 ${
                  errors.City ? "border-red-500" : ""
                }`}
              />
              {errors.City && (
                <p className="text-red-500 text-xs">{errors.City}</p>
              )}
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Pincode
              </label>
              <input
                type="text"
                name="Pincode"
                value={formData.Pincode}
                onChange={handleChange}
                className={`mt-1 block w-full border border-gray-300 rounded-md p-1 md:p-2 ${
                  errors.Pincode ? "border-red-500" : ""
                }`}
              />
              {errors.Pincode && (
                <p className="text-red-500 text-xs">{errors.Pincode}</p>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Remark
            </label>
            <input
              type="text"
              name="Remark"
              value={formData.Remark}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-1 md:p-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-yellow-400 py-2 rounded-md font-bold"
          >
            Go Solar!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
