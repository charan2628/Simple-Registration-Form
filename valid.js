(function() {
    const form = document.getElementById("registration")

    let validFlag = true

    form.addEventListener("submit", valid)

    let inputArray = document.querySelectorAll("#registration input")
    let fieldHash = {}
    for(index in inputArray)
        fieldHash[inputArray[index].name] = inputArray[index]

    fieldHash['firstName'].addEventListener("change", checkName)
    fieldHash['lastName'].addEventListener("change", checkName)
    fieldHash['dob'].addEventListener("change", checkDOB)
    fieldHash['address'].addEventListener("change", checkAddress)
    fieldHash['userName'].addEventListener("change", checkUserName)
    fieldHash['password'].addEventListener("change", checkPassword)
    fieldHash['confirmPassword'].addEventListener("change", checkPassWordMatches)

    function valid(e) {
        e.preventDefault();
        checkName(fieldHash['firstName'])
        checkName(fieldHash['lastName'])
        checkDOB(fieldHash['dob'])
        checkName(fieldHash['address'])
        checkUserName(fieldHash['userName'])
        checkPassword(fieldHash['password'])
        checkPassWordMatches(fieldHash['confirmPassword'])
        if(validFlag) {
            let formInput = {}
            for(index in inputArray)
                formInput[inputArray[index].name] = inputArray[index].value
            alert(JSON.stringify(formInput))
            form.submit();
        }
    }

    function checkName(event) {
        let nameFiled = (event.target) ? event.target : event
        let name = nameFiled.value
        if(/^\d/.test(name)) {
            nameFiled.nextSibling.innerHTML = "Name Shouldn't start with number"
            validFlag = false
            return validFlag
        }
        if(/[^\s\w]/.test(name)) {
            nameFiled.nextSibling.innerHTML = "Name Shouldn't contain special characters"
            validFlag = false
            return validFlag
        }
        if(name.length < 2) {
            nameFiled.nextSibling.innerHTML = "Name Should be atleast 2 characters"
            validFlag = false
            return validFlag
        }
        if(name.length > 20) {
            nameFiled.nextSibling.innerHTML = "Name Shouldn't be greater than 20 characters"
            validFlag = false
            return validFlag
        }
        nameFiled.nextSibling.innerHTML = ""
        if(event.target === undefined)
            validFlag = true
        return validFlag
    }

    function checkDOB(event) {
        let dateField = (event.target) ? event.target : event
        let date = dateField.value
        let selectedDate = new Date(date)
        let currentDate = new Date()
        if((currentDate.getFullYear() - selectedDate.getFullYear()) < 19) {
            dateField.nextSibling.innerHTML = "Age should be atleast 19"
            validFlag = false
            return validFlag
        }
        dateField.nextSibling.innerHTML = ""
        if(event.target === undefined)
            validFlag = true
        return validFlag
    }

    function checkAddress(event) {
        let addressField = (event.target) ? event.target : event
        let address = addressField.value
        if(address.length < 5) {
            addressField.nextSibling.innerHTML = "Please provide valid address"
            validFlag = false
            return validFlag
        }
        addressField.nextSibling.innerHTML = ""
        if(event.target === undefined)
            validFlag = true
        return validFlag
    }

    function checkUserName(event) {
        let userNameField = (event.target) ? event.target : event
        let userName = userNameField.value
        if(/^\d/.test(userName)) {
            userNameField.nextSibling.innerHTML = "UserName shouldn't start with number"
            validFlag = false
            return validFlag
        }
        if(userName.length < 3) {
            userNameField.nextSibling.innerHTML = "UserName should be atleast 3 characters"
            validFlag = false
            return validFlag
        }
        userNameField.nextSibling.innerHTML = ""
        if(event.target === undefined)
            validFlag = true
        return validFlag
    }

    function checkPassword(event) {
        let passwordField = (event.target) ? event.target : event
        let password = passwordField.value
        if(!(/[a-z]/.test(password))) {
            passwordField.nextSibling.innerHTML = "Password should contain atleast one smallcase letter"
            validFlag = false
            return validFlag
        }
        if(!(/[A-Z]/.test(password))) {
            passwordField.nextSibling.innerHTML = "Password should contain atleast one capital letter"
            validFlag = false
            return validFlag
        }
        if(!(/[\d]/.test(password))) {
            passwordField.nextSibling.innerHTML = "Password should contain atleast one digit"
            validFlag = false
            return validFlag
        }
        if(!(/[^\s\d\w]/.test(password))) {
            passwordField.nextSibling.innerHTML = "Password should contain atleast one special character"
            validFlag = false
            return validFlag
        }
        if(password.length < 8) {
            passwordField.nextSibling.innerHTML = "Password should be atleast 8 characters"
            validFlag = false
            return validFlag
        }
        passwordField.nextSibling.innerHTML = ""
        if(event.target === undefined)
            validFlag = true
        return validFlag
    }

    function checkPassWordMatches(event) {
        let confirmPasswordFiled = (event.target) ? event.target : event
        let confirmPassword = confirmPasswordFiled.value
        let password = fieldHash['password'].value
        if(password !== confirmPassword) {
            confirmPasswordFiled.nextSibling.innerHTML = "Passwords in both fileds should match"
            validFlag = false
            return validFlag
        }
        confirmPasswordFiled.nextSibling.innerHTML = ""
        if(event.target === undefined)
            validFlag = true
        return validFlag
    }
})();