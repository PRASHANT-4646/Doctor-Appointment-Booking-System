// Sample data for doctors
const doctors = [
    {
        id: 1,
        name: 'Dr.Mahesh',
        specialty: 'Cardiology',
        location: 'lucknow',
        qualifications: 'MD, PhD',
        reviews: '4.5/5',
        slots: ['2024-08-15T09:00', '2024-08-15T10:00']
    },
    {
        id: 2,
        name: 'Dr.Ayushi',
        specialty: 'Gastroenterologist',
        location: 'Bhopal',
        qualifications: 'MD,MBBS',
        reviews: '4.5/5',
        slots: ['2024-08-17T03:00', '2024-08-17T05:00']
    },
    {
        id: 3,
        name: 'Dr. Prashant',
        specialty: 'dentist',
        location: 'Noida',
        qualifications: 'BDS',
        reviews: '4.1/5',
       
        slots: ['2024-08-17T03:00', '2024-08-17T05:00']
    }
];

// Search Doctors
function searchDoctors() {
    const specialty = document.getElementById('specialty').value;
    const location = document.getElementById('location').value;
    const availability= document.getElementById('availability').value;

    const profilesContainer = document.getElementById('profiles-container');
    profilesContainer.innerHTML = '';

    const filteredDoctors = doctors.filter(doctor =>
        (specialty === '' || doctor.specialty.includes(specialty)) &&
        (location === '' || doctor.location.includes(location))
    );

    filteredDoctors.forEach(doctor => {
        const doctorDiv = document.createElement('div');
        doctorDiv.classList.add('doctor-profile');
        doctorDiv.innerHTML = `
            <h3>${doctor.name}</h3>
            <p>Specialty: ${doctor.specialty}</p>
            <p>Location: ${doctor.location}</p>
            <p>Qualifications: ${doctor.qualifications}</p>
            <p>Reviews: ${doctor.reviews}</p>
            <button onclick="viewProfile(${doctor.id})">View Profile</button>
        `;
        profilesContainer.appendChild(doctorDiv);
    });
}

// View Doctor Profile
function viewProfile(doctorId) {
    const doctor = doctors.find(d => d.id === doctorId);

    const doctorProfileDetails = document.getElementById('doctor-profile-details');
    const availableSlots = document.getElementById('available-slots');
    const appointmentBooking = document.getElementById('appointment-booking');

    doctorProfileDetails.innerHTML = `
        <h3>${doctor.name}</h3>
        <p>Specialty: ${doctor.specialty}</p>
        <p>Location: ${doctor.location}</p>
        <p>Qualifications: ${doctor.qualifications}</p>
        <p>Reviews: ${doctor.reviews}</p>
    `;

    availableSlots.innerHTML = `
        <h4>Available Slots</h4>
        ${doctor.slots.map(slot => `<div class="slot"><input type="radio" name="slot" value="${slot}"> ${new Date(slot).toLocaleString()}</div>`).join('')}
    `;

    appointmentBooking.style.display = 'block';
}

// Book Appointment
function bookAppointment() {
    const selectedSlot = document.querySelector('input[name="slot"]:checked').value;
    alert(`Appointment booked for ${new Date(selectedSlot).toLocaleString()}`);
    // Here, you would typically send this data to a server to book the appointment.
}

// Manage Appointments (Placeholder)
function manageAppointments() {
    const appointmentsList = document.getElementById('appointments-list');
    // Sample data for appointments
    const appointments = [
        {
            date: '2024-08-15T09:00',
            doctor: 'Dr.Mahesh'
        }
    ];
   

    appointmentsList.innerHTML = `
        <h4>Your Appointments</h4>
        ${appointments.map(app => `<div>${app.date} with ${app.doctor} <button onclick="cancelAppointment('${app.date}')">Cancel</button></div>`).join('')}
    `;
}

// Cancel Appointment (Placeholder)
function cancelAppointment(date) {
    alert(`Appointment on ${date} has been canceled.`);
    // Here, you would typically send this data to a server to cancel the appointment.
}

// Initial setup
manageAppointments();
