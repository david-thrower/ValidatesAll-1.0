// documentation:
// This will allow numerous validations enforcing all sorts of requirements that can be used on one or many field(s) in a page. All you need to do is include this 
// function in between the <script> and </script> tags on the page and call this function with the correct arguments that set what 
// restrictions you want for the field. Here is an example:
//
// If you had a page with a field for phone number, you will need to ensure that a user enters number that is 10 digits in lengts and 
// a whole number is entered for the entry to be useful. Let's say have a variable named phoneNumber, you would use this code to validate this field this way:
// validateAll(phoneNumber, 1, null, null, null, "the phone number field");
// validateAll(phoneNumber, 6, null, null, 10, "the phone number field");
// This would render an alert reading "Please enter something in the phone number field that is a whole number." if anything not a whole number is entered.
// It will also render an alert reading "Please enter something in the phone number field that is 10 characters long." if a user enters something not 10 characters long. 
// Now all you need to do is call this function with the selected arguments, and you can put any restriction on a field entry without having to write any code! 
//
//
// userInput is the input from the field on the user interface being validated.
// dataType is the selector for which type of restriction you want to place on the field. See the key below. 
//       
//            Key for 'dataType'
//                   - dataType                                               1 = sets the restriction: Integer - whole numbers will be accepted, anything else will be rejected
//                                                                            2 = sets the restriction: Number - any number will be accepted any non-number will be rejected
//                                                                            3 = Sets the restriction: Alphabetical strings without numbers or cpecial characters accepted, all others rejected 
//                                                                            4 = date   # reserved for future use.
//                                                                            5 = starts with - Sets the requirement for the first few digits by setting the "StartsWith" parameter with the requirement as an argument 
//                                                                                what the user's input should begin with. Set how many letters it should start with with the 'startsWithHowMany' parameter
//                                                                                (for instance something that is being validated to start with AL should be set to 2).
//                                                                            6 = length - rejects user inputs that are not a prescribed length. Set the parameter 'length' to the prescribed lengh as an integer argument.
//                                                                                Simply choose a datatype to restrict the input to and the parameters that go with that datatype as mentioned above. set all others parameters to the argument  null.
 
function validateAll(userInput, dataType, startsWith, startsWithHowMany, length, fieldID){
        switch (dataType){
                case 1: {
                         isIntnt = Number.isInteger(userInput)
                         if (isIntnt === false)
                                problem = "is a whole number.";
                                        else problem = null;                                                                       
                         break;
                         }             
                case 2:{
                        if (isNaN(userInput) === true)
                                problem = "is a number.";
                        else problem = null;
                        break;
                        }
                case 3:{
                        function lettersOnly(userInput){
                                        acceptable = RegExp(/^[a-z]+$/i);
                                        if (acceptable.test(userInput) === false)
                                                problem = "is letters only.";
                                        else problem = null;
                                        return problem;
                                                       }
                        lettersOnly(userInput);
                        break;
                        }
                case 4: {
                         // COMPLETE THIS LATER 
                         alert("Date") // Test code delete this later
                         break;
                        }
                case 5:{
                              
                        function validatesStartsWith(userInput, startsWith, startsWithHowMany){
                                        switch(startsWithHowMany){
                                                case 1: {
                                                        if (userInput.charAt(0).toUpperCase() === startsWith.toUpperCase() && userInput.length >= 1)
                                                                problem = null;
                                                        else
                                                                {      
                                                                toconcat = "starts with ";
                                                                problem =  toconcat.concat(startsWith); 
                                                                }
                                                         break;
                                                        }
                                                                               
                                                case 2: {
                                                        l1=userInput.charAt(0);
                                                        l2=userInput.charAt(1);
                                                        check=l1.concat(l2);
                                                        if (check.toUpperCase() === startsWith.toUpperCase() && userInput.length >= 2)
                                                                problem = null;
                                                        else
                                                               {             
                                                                toconcat2 = "starts with ";
                                                                problem = toconcat2.concat(startsWith);
                                                                }
                                                        break;
                                                        }
                                                case 3: {
                                                         l1=userInput.charAt(0);
                                                         l2=userInput.charAt(1);
                                                         l3=userInput.charAt(2);
                                                         l1and2=l1.concat(l2);
                                                         check=l1and2.concat(l3);
                                                                if (check.toUpperCase() === startsWith.toUpperCase() && userInput.length >= 3 )
                                                                        problem = null;
                                                                else
                                                                        {             
                                                                        toconcat3 = "starts with ";
                                                                        problem = toconcat3.concat(startsWith);
                                                                        }
                                                        break;
                                                        }
                                                case 4:{
                                                        l1=userInput.charAt(0);
                                                        l2=userInput.charAt(1);
                                                        l3=userInput.charAt(2);
                                                        l4=userInput.charAt(3);
                                                        l1and2=l1.concat(l2);
                                                        l1andl2andl3=l1and2.concat(l3);
                                                        check=l1andl2andl3.concat(l4);
                                                        if (check.toUpperCase() === startsWith.toUpperCase() && userInput.length >= 4)
                                                                problem = null;
                                                        else 
                                                                {                             
                                                                toconcat4 = "starts with ";           
                                                                problem =  toconcat4.concat(startsWith);
                                                                }
                                                        break;
                                                        }
                                                }
                                               
                                                return problem;
                                                }
                                problem = validatesStartsWith(userInput, startsWith, startsWithHowMany);
                                break;
                                }
                case 6:{
                        if (userInput.length === length)
                                problem = null;
                        else
                                {
                                warnString1 = "is ";
                                warnString2 = length;
                                warnString3 = " characters long";
                                warn1and2=warnString1.concat(warnString2);
                                problem = warn1and2.concat(warnString3);
                                }             
                                break;
                        }
                return problem;
                }
               
function warning(problem, fieldID) {
                                if (problem != null)
                                                alert("Please enter something in " + fieldID + " that " + problem);
                                else return null;
                                }
warning(problem, fieldID);
problem = null;
}
//Readme
// (C) 2016 David W. Thrower, PSM
// This is offered for anyone's use under the terms of the Apache License with the following exceptions: 
// This shall not be used in any software that is used for any of the following purposes:
//    A. To commit any act of fraud, deceit, extortion, or for the production, sale, distribution, or marketing ofany illicit, obscene, or prohibited materials
//    B. For critical applications such as operation of an aircraft controls, critical orienteering applications, or control of heavy machinery
//    C. To use in any way that deprives another of their basic rights, promotes discrimination including promoting hate crime, encourages Female Genital Mutilation, or similar purposes
//    D. Use in war operations 
//    E. Use in systems/apps/websites used to operate or promote an abortion facility  
