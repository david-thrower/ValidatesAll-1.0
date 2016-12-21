ValidatesAll-1.0 - Click [RAW] to read full text. 

This is a function that can be used to validate all sorts of restrictions on a field's input ...

documentation:

This function will allow numerous validations enforcing all sorts of requirements that can be used on one or many field(s) in a page. All you need to do is include this function in between the <script> and </script> tags on the page and call this function with the correct arguments that set what restrictions you want for the field. Here is an example:

If you had a page with a field for phone number, you will need to ensure that a user enters number that is 10 digits in length for the entry to be useful. adding this function in an onblur attribute for the text  field with the argument 6 for the parameter datatype and 10 as the argument for the parameter length.  
  
It will render an alert reading "Please enter something in the phone number field that is 10 characters long." if a user enters something not 10 characters long. 

Now all you need to do is call this function in an onblur event with the selected arguments, and you can put any of these restrictions on a field entry without having to write any code other code! To impose multiple restrictions, write a function in the script which calls this function multiple times, once with each restriction you want validated, then call the function you wrote in the onblur attribute. 

INDEX OF PARAMETERS: 
userInput is the input from the field on the user interface being validated.
dataType is the selector for which type of restriction you want to place on the field. See the key below. 

Key for parameter 'dataType'
                1 = sets the restriction: Integer - whole numbers will be accepted, anything else will be rejected
                2 = sets the restriction: Number - any number will be accepted any non-number will be rejected
                3 = Sets the restriction: Alphabetical strings without numbers or cpecial characters accepted, all others 
                    rejected 
                4 = date   # reserved for future use.
                5 = starts with - Sets the requirement for the first few digits by setting the "StartsWith"                   
                    parameter with the requirement as an argument what the user's input should begin with. Set how many letters 
                    it should start with with the 'startsWithHowMany' parameter (for instance something that is being 
                    validated to start with AL should be set to 2).
                6 = length - rejects user inputs that are not a prescribed length. Set the parameter 'length' to the prescribed 
                    lengh as an integer argument. Simply choose a datatype to restrict the input to and the parameters that go 
                    with that datatype as mentioned above. set all others parameters to the argument  null.


Readme
(C) 2016 David W. Thrower, PSM
This is offered for anyone's use under the terms of the Apache License with the following exceptions: 
This shall not be used in any software that is used for any of the following purposes:
A. To commit any act of fraud, deceit, extortion, or for the production, sale, distribution, or marketing ofany illicit, obscene, or prohibited materials
B. For critical applications such as operation of an aircraft controls, critical orienteering applications, or control of heavy machinery
C. To use in any way that deprives another of their basic rights whether legally or illegally, promotes discrimination including promoting hate crime, encourages Female Genital Mutilation, or similar purposes
D. Use in war operations 
E. Use in systems/apps/websites used to operate or promote an abortion facility  
