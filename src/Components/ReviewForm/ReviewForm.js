import React, { useEffect, useState } from 'react';
import './ReviewForm.css';
import GiveReviews from '../GiveReviews/GiveReviews';

const ReviewForm = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [doctorData, setDoctorData] = useState(null);
    const [appointmentData, setAppointmentData] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const handleButtonClick = () => {
        console.log('Give Review button clicked');
        setShowForm(true);
        <GiveReviews/>
        console.log('showForm: ', showForm);
    };

    // useEffect hook to perform side effects in the component
    useEffect(() => {
        // Retrieve stored username, doctor data, and appointment data from sessionStorage and localStorage
        const storedUsername = sessionStorage.getItem('email');
        const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
        const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));

        // Set isLoggedIn state to true and update username if storedUsername exists
        if (storedUsername) {
            setIsLoggedIn(true);
            setUsername(storedUsername);
        }

        // Set doctorData state if storedDoctorData exists
        if (storedDoctorData) {
            setDoctorData(storedDoctorData);
        }

        // Set appointmentData state if storedAppointmentData exists
        if (storedAppointmentData) {
            setAppointmentData(storedAppointmentData);
        }

    }, []);

    return (
        <div>
            {isLoggedIn && doctorData && (
                <>
                    <h1 className='review-form__title'>Reviews</h1>
                    <table className='review-form__table'>
                        <thead>
                            <tr className='review-form__heading-row'>
                            <th scope="col">Serial Number</th>
                            <th scope="col">Doctor Name</th>
                            <th scope="col">Doctor Specialist</th>
                            <th scope="col">Provide Feedback</th>
                            <th scope="col">Review Given</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>{doctorData.name}</td>
                                <td>{doctorData.speciality}</td>
                                <td><button onClick={handleButtonClick}>Click here</button></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
};

export default ReviewForm;