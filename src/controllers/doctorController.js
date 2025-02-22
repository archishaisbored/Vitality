const Doctor = require('../models/Doctor');

exports.getDoctors = async (req, res) => {
    try {
        const { search } = req.query;
        let query = {};

        if (search) {
            query = {
                $or: [
                    { name: { $regex: search, $options: 'i' } },
                    { specialization: { $regex: search, $options: 'i' } },
                    { hospital: { $regex: search, $options: 'i' } },
                ],
            };
        }

        const doctors = await Doctor.find(query);
        res.status(200).json(doctors);
    } catch (error) {
        console.error('Error fetching doctors:', error);
        res.status(500).json({ message: 'Failed to fetch doctors' });
    }
};

exports.getDoctorsBySpecialization = async (req, res) => {
    try {
        const specialization = req.params.specialization;
        const doctors = await Doctor.find({ specialization });
        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).json({ message: "Error fetching doctors by specialization", error: error.message });
    }
};
