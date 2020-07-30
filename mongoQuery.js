/*

This contains a sample mongo aggregate query to groupBy different fields.

/*
    Collection : DoctorDetails
    specialisation      location        doctorId
    cardiologist         pune              123
    cardiologist         pune              321
    cardiologist         mumbai            456

    query output : 
        cardiologist,pune : 2
        cardiologist, mumbai : 1

    //groupBy specialisation, location to do in single query
*/


// db.DoctorDetails.find({}).fetch();


// db.DoctorDetails.insertMany( [
//     { _id: 10, specialisation: "cardiologist", location: "pune" },
//     { _id: 11, specialisation: "cardiologist", location: "pune" },
//     { _id: 12, specialisation: "cardiologist", location: "mumbai" }
//  ] )




db.DoctorDetails.aggregate([{

    "$group" : {
        _id : {
            "location" : "$location",
            "specialisation" : "$specialisation"
        },
        count : {$sum : 1}
    }
}]);
