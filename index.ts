export const searchAll = (input, valueToCheck, keysToCheck): Array<any> => {
    try {
        validateInput(input, keysToCheck);
        return iterateArrayToCheck(input, valueToCheck, keysToCheck);
    } catch (error) {
        return error;
    }
}

function validateInput (inputArray, keysToCheck) {
    if (!Array.isArray(inputArray) || !Array.isArray(keysToCheck) || keysToCheck.length < 1 || inputArray.length < 1) {
        throw Error("Invalid Input");
    }
    return true;
}

function iterateArrayToCheck(inputArray, valueToCheck, keysToCheck) {
    let result = [];
    inputArray.forEach(input => {
        if (isValueMatched(input, valueToCheck, keysToCheck)) {
            result.push(input);
        };
    });
    return result;
}

function isValueMatched(inputObj, valueToCheck, keysToCheck) {
    let result = false;
    for (const key in inputObj) {
        const isKeyMatch = keysToCheck.indexOf(key);
        if (isKeyMatch !== -1) {
            if (inputObj[key] === valueToCheck) {
                result = true;
            }
        }
    }
    return result;
}
