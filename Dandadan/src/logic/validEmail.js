import { Submit } from "../services/submit";


export function validEmail(event) {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@iiserb\.ac\.in$/;
    const gmailRegex24 = /^[a-zA-Z._%+-]+24@iiserb\.ac\.in$/;
    if (!gmailRegex.test(email))
        alert("Enter IISER-B Email ID");

    else {
        if (!gmailRegex24.test(email))
            alert("Only for 24 Batch");

        else {
            Submit(event);
        }
    }
}
