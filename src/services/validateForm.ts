/**
 * form validator
 * @param {string} name 
 * @param value 
 * @returns {string}
 */

const validateForm = (name: string, value: unknown): string => {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    switch (name) {
        case 'email':
            if (value === '') return "Email is required";
            else if (typeof value === 'string' && !value.match(regex)) return 'Not a valid email';
            break;
        case 'name':
            if (value === '') return "name is required";
            else if (typeof value === 'string' && value.length > 30) return "name should be less than 30 characters ";
            break;
        case 'phone':
            if (typeof value === 'string' && value.length !== 10) return "Invalid phone number"
            break;
        case 'age':
            if (value === '') return 'Age is required'
            else if (typeof value === 'string' && Number(value) < 0 && Number(value) > 150) return "Specify a valid age"
            break;
        case 'place':
            if (value === '') return "Place is required";
            else if (typeof value === 'string' && value.length > 40) return "place should be less than 40 characters ";
            break;
    }
    return ''
}

export default validateForm