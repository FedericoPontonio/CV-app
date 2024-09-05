export function updateStoredData(data) {
    localStorage.setItem('CVDataJson', JSON.stringify(data));
};

export const dataRoot = {
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
            role: 'Bidello',
            company: 'Achille Mapelli',
            city: 'Monza',
            startDate: '2004-02',
            endDate: '2024-02',
            description: "Mi occupavo di pulire i gabinetti e i banchi.",
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

};



export  const workExperiences = [
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
        role: 'Bidello',
        company: 'Achille Mapelli',
        city: 'Monza',
        startDate: '2004-02',
        endDate: '2024-02',
        description: "Mi occupavo di pulire i gabinetti e i banchi.",
    }
];

export function WorkExperienceConstructor(role='Role', company='Company/Employer', city='Location', startDate='Start Date', endDate='End Date', description="A brief description of your responsability", key= crypto.randomUUID()) {
    return {role, company, city, startDate, endDate, description, key}
};

export const education = [
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
];

export function EducationConstructor(degree='Degree', title='Title acquired', school='School name', city='Location', startDate='Start Date', endDate='End Date', key=crypto.randomUUID()) {
    return {degree, title, school, city, startDate, endDate, key}
};

//initialize dummy experiences if none is present.
// updateStoredData(dataRoot);
(function initializeData() {//modificare
    if (JSON.parse(localStorage.getItem('CVDataJson')).length <1) {
        updateStoredData(dataRoot);
    }
}) ();