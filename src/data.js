
export function updateStoredData(data) {
    localStorage.setItem('CVDataJson', JSON.stringify(data));
};

export const dataRoot = {
    contacts: {
            fName: 'First Name',
            lName: 'Last Name',
            professionalRole: 'Web Developer',
            address: '132, My Street, Kingston, New York 12401.',
            email: 'exemple@gmail.com',
            linkedin: 'https://www.linkedin.com',
            phoneNumber: '334 533 1133',
    },
    workExperiences : [
        {
            key: crypto.randomUUID(),
            role: 'Software Engineer',
            company: 'Facebook',
            city: 'San Francisco',
            startDate: '2024-02',
            endDate: 'Present',
            description: "As a Software Engineer at Facebook, I played a key role in enhancing the platform's performance and scalability.",
        },
        {
            key: crypto.randomUUID(),
            role: 'Construction Worker',
            company: 'Constructions s.r.l.',
            city: 'Monza',
            startDate: '2004-02',
            endDate: '2024-03',
            description: "As a Construction worker, I played a key role in building houses.",
        }
    ],
    education : [
        {
            key: crypto.randomUUID(),
            degree: "Master's Degree",
            title: 'Software Engineering',
            school: 'Stanford',
            city: 'San Francisco',
            startDate: '2024-02',
            endDate: 'Present',
        },
        {
            key: crypto.randomUUID(),
            degree: "Bachelor's Degree",
            title: 'Computer Science',
            school: 'Stanford',
            city: 'San Francisco',
            startDate: '2021-7',
            endDate: '2024-02'
        }
    ],
    skills: [
        {
            key: crypto.randomUUID(),
            value: 'Javascript',
        },
        {
            key: crypto.randomUUID(),
            value: 'React',
        },        {
            key: crypto.randomUUID(),
            value: 'Html',
        },        {
            key: crypto.randomUUID(),
            value: 'Css',
        },
    ],
    languages: [
        {
            key: crypto.randomUUID(),
            value: 'English',
        },
        {
            key: crypto.randomUUID(),
            value: 'Italian',
        },
        {
            key: crypto.randomUUID(),
            value: 'Franch',
        },
        {
            key: crypto.randomUUID(),
            value: 'Spanish',
        },
    ],
    hobbies: [
        {
            key: crypto.randomUUID(),
            value: 'Reading',
        },
        {
            key: crypto.randomUUID(),
            value: 'Traveling',
        },
        {
            key: crypto.randomUUID(),
            value: 'Cycling',
        },
        {
            key: crypto.randomUUID(),
            value: 'Cooking',
        },
    ],
    cvClause: "I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process under the European Parliament's and Council of the European Union Regulation on the Protection of Natural Persons as of 27 April 2016, with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC.",


};
export function SingleLinerComponentConstructor(topic, key= crypto.randomUUID()) {
    return {key, value: 'Write your '+ topic}
}

export function WorkExperienceConstructor(role='Role', company='Company/Employer', city='Location', startDate='Start Date', endDate='End Date', description="A brief description of your responsability", key= crypto.randomUUID()) {
    return {role, company, city, startDate, endDate, description, key}
};

export function EducationConstructor(degree='Degree', title='Title acquired', school='School name', city='Location', startDate='Start Date', endDate='End Date', key=crypto.randomUUID()) {
    return {degree, title, school, city, startDate, endDate, key}
};


//initialize dummy experiences if none is present.

(function initializeData() {//modificare
    if (JSON.parse(localStorage.getItem('CVDataJson'))==null) {
        updateStoredData(dataRoot);
    }
}) ();

// updateStoredData(dataRoot);
// localStorage.removeItem('CVDataJson');