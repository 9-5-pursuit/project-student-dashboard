export default function Student({ student }) {
    function formatName(nameObj) {
        let formattedName = ""

        let firstName = `${nameObj.preferredName} `;
        let middleInitial = `${nameObj.middleName[0]}. `;
        let lastName = `${nameObj.surname}`;

        formattedName = firstName + middleInitial + lastName;

        return formattedName;
    }

    function formatDate(date) {
        let dateArray = date.split("/")

        let month = Number(dateArray[0])
        let day = Number(dateArray[1])
        let year = Number(dateArray[2])

        let stringMonth = ""

        switch (month) {
            case 1:
                stringMonth = "January"
                break;
            case 2:
                stringMonth = "February"
                break;
            case 3:
                stringMonth = "March"
                break;
            case 4:
                stringMonth = "April"
                break;
            case 5:
                stringMonth = "May"
                break;
            case 6:
                stringMonth = "June"
                break;
            case 7:
                stringMonth = "July"
                break;
            case 8:
                stringMonth = "August"
                break;
            case 9:
                stringMonth = "September"
                break;
            case 10:
                stringMonth = "October"
                break;
            case 11:
                stringMonth = "November"
                break;
            case 12:
                stringMonth = "December"
                break;
            default:
                stringMonth = null
                break;
        }

        let formattedDate = `${stringMonth} ${day}, ${year}`

        return formattedDate
    }

    const studentStyle = {
        "border": "2px solid green",
        "padding": "5%"
    }

    return (
        <div style={studentStyle}>
            <img src="..." alt="Card image cap"/>
                <div>
                    <h5>{formatName(student.names)}</h5>
                    <p>{student.username}</p>
                    <p><span>Birthday:</span> {formatDate(student.dob)}</p>
                    <a href="#">Show More...</a>
                </div>
        </div>
    )
}