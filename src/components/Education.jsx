
export default function Education() {
    const educationItems = [
        {name: 'University of Massachusetts Lowell', degree: 'MS Plastics Engineering', field: 'Polymer/Plastics Engineering', date: '1990 - 1992', img: '/images/lowell_university.jpeg'},
        {name: 'Worcester State University', degree: 'MS biotechnology', field: 'Bio Tech Engineering', date: '2005 - 2006', img: '/images/worcester.jpeg'},
        {name: 'Education Degree', degree: 'Bachelor of Education (B.Ed.)', field: 'Teaching of Science', date: '', img: '/images/degree.jpeg'},
        {name: 'BS Chemistry & Biology', degree: 'Bachelor of Science (BS)', field: 'Biology & Chemistry', date: '', img: '/images/degree.jpeg'},
    ];

    return (
        <div>
            <center>
                <h1 className='education-title'>Education</h1>
            </center>
            <div className='education-list'>
                {educationItems.map((edu, i) => {
                    return (
                        <div className='education-item' key={i}>
                            <img className='edu-img' src={edu.img} />
                            <h5 className='edu-name'>{edu.name} <p className='edu-degree'>{edu.degree} | {edu.field}</p> <p className='edu-date'>{edu.date}</p></h5>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
