export default function Experience({ resumeData  }) {
    return (
        <div className="ps-3 pe-3 pt-3 m-0">
            <h5 className="text-start" style={{color:resumeData.themeColor}}>Experience</h5>
            <div style={{border: `0.5px solid ${resumeData.themeColor}`}}></div>
            {
                resumeData.experience?.map((experience) => (
                    <div key={experience.id} className="mb-3">
                        <h6 className="text-start fw-bold mt-1">{experience.title}</h6>
                        <div className="d-flex justify-content-between">
                            <p className="text-start">{experience.companyName}, {experience.city}, {experience.state}</p>
                            <p className="text-start">
                                {experience.startDate} - {experience.currentlyWorking ? 'Present' : experience.endDate}
                            </p>
                        </div>
                        <div 
                            className="text-start" 
                            dangerouslySetInnerHTML={{ __html: experience.workSummery }} 
                        />
                    </div>
                ))
            }
        </div>
    )
}