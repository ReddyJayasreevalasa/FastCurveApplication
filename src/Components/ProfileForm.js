import { useState, useMemo, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import countryList from 'react-select-country-list'
import { setProfile } from "../Reducer/productDataSlice";

const ProfileForm = () => {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNum: "",
        country: ""
    });
    const [flags, setFlags] = useState({
        firstNameFlag: "",
        lastNameFlag: "",
        emailFlag: "",
        phoneNumFlag: "",
        firstNameError: "",
        lastNameError: "",
        emailError: "",
        phoneNumError: ""
    });
    const data=useSelector(state=>state.productData.profile)
    const dispatch=useDispatch()

    useEffect(()=>{
        setUserData({...userData,...data})
    },[data])

    const regexName = /^[A-Za-z]{2,20}$/
    const regexEmail = /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/

    const onChangeInputHandler = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
        setFlags({ ...flags, [`${e.target.name}Flag`]: "", [`${e.target.name}Error`]: "" })
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        if (!userData.firstName) {
            setFlags((prev) => ({ ...prev, firstNameFlag: "FirstName should not be empty" }))
        } else if (!regexName.test(userData.firstName)) {
            setFlags((prev) => ({ ...prev, firstNameError: "First Name must be 2-20 alphabetic characters" }))
        }
        if (!userData.lastName) {
            setFlags((prev) => ({ ...prev, lastNameFlag: "LastName should not be empty" }))
        } else if (!regexName.test(userData.lastName)) {
            setFlags((prev) => ({ ...prev, lastNameError: "Last Name must be 2-20 alphabetic characters" }))
        }
        if (!userData.email) {
            setFlags((prev) => ({ ...prev, emailFlag: "email should not be empty" }))
        } else if (!regexEmail.test(userData.email)) {
            setFlags((prev) => ({ ...prev, emailError: "please enter proper email" }))
        }
        if (!userData.phoneNum) {
            setFlags((prev) => ({ ...prev, phoneNumFlag: "Phone Number should not be Empty" }))
        } else if (userData.phoneNum.length !== 10) {
            setFlags((prev) => ({ ...prev, phoneNumError: "Phone Number must be 10 digits" }))
        }

        if (userData.firstName && userData.lastName && userData.email && userData.phoneNum) {
            dispatch(setProfile(userData))
        }
    }
    return (
        <div className="login_page">
            <form style={{ width: "50%" }}>
                <div class="form-group row">
                    <label for="firstName" class="col-sm-2 col-form-label">First Name:</label>
                    <div class="col-sm-10">
                        <input type="text"
                            class="form-control" id="firstName" name="firstName" onChange={onChangeInputHandler} value={userData.firstName} />
                        {flags.firstNameFlag && (<small className="text-danger">{flags.firstNameFlag}</small>)}
                        {flags.firstNameError && (<small className="text-danger">
                            {flags.firstNameError}</small>)}
                    </div>
                </div>
                <div class="form-group row">
                    <label for="lastName" class="col-sm-2 col-form-label">Last Name:</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="lastName" name="lastName" onChange={onChangeInputHandler} value={userData.lastName} />
                        {flags.lastNameFlag && (<small className="text-danger">{flags.lastNameFlag}</small>)}
                        {flags.lastNameError && (<small className="text-danger">{flags.lastNameError}</small>)}
                    </div>
                </div>
                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Email ID:</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="staticEmail" name="email" onChange={onChangeInputHandler} value={userData.email} />
                        {flags.emailFlag && (<small className="text-danger">{flags.emailFlag}</small>)}
                        {flags.emailError && (<small className="text-danger">{flags.emailError}</small>)}
                    </div>
                </div>
                <div class="form-group row">
                    <label for="phoneNumber" class="col-sm-2 col-form-label">Phone Number:</label>
                    <div class="col-sm-10">
                        <div class="row">
                            <div class="col-4">
                                <select
                                    class="form-control"
                                    id="inlineFormCustomSelect"
                                    onChange={onChangeInputHandler}
                                    name="country"
                                >
                                    <option>select country region</option>
                                    {countryList()
                                        .getData()
                                        .map((country) => (
                                            <option>{country.label}</option>
                                        ))}
                                </select>
                            </div>
                            <div class="col-8">
                                <input
                                    type="tel"
                                    class="form-control"
                                    id="phoneNumber"
                                    name="phoneNum"
                                    onChange={onChangeInputHandler}
                                    value={userData.phoneNum}
                                />
                            </div>
                        </div>
                        {flags.phoneNumFlag && (
                            <small className="text-danger">{flags.phoneNumFlag}</small>
                        )}
                        {flags.phoneNumError && (
                            <small className="text-danger">{flags.phoneNumError}</small>
                        )}
                    </div>
                </div>
                <button
                    className="submit_button btn btn-primary"
                    type="submit"
                    onClick={onSubmitForm}
                >
                    Submit
                </button>
            </form>
        </div>
    )

}
export default ProfileForm