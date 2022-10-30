import { useState } from "react";

export default function Skills() {
    const [skillsOpened, setSkillsOpened] = useState(false);
    const [btnText, setBtnText] = useState('See More');

    const ToggleSkills = () => {
        setSkillsOpened(!skillsOpened);
        if (btnText == 'See More') {
            setBtnText('See Less');
        } else {
            setBtnText('See More');
            handleSelectSkills();
        }
    }

    const handleSelectSkills = () => {
        let element = document.getElementById('skills-container');
        element.scrollIntoView();
    }

    return (
        <div>
            <center>
                <h1 className='skills-title'>Skills</h1>
            </center>
            {/* Main skills */}
            <ul className='skills-list'>
                <li>Design and Development</li>
                <li>Auditing: first party, second party and third party audits.</li>
                <li>Sterilization:  Ebeam, Gamma, ETO</li>
                <li>Formulation:  Plastics compounding wire and cables, medical parts, extrusions and injection molded parts.</li>
                <li>Process:  Injection Molding, Extrusion, Blow Molding and Compression Molding</li>
                <li>Regulations:  MDSAP countries US, Canada, Japan, Australia and Brazil</li>
                <li>Quality Management System:  ISO 13485, 9001 and CFR 21</li>
                <li>EU Regulations – EUMDR, MDD and the technical files.</li>
            </ul>
            {/* Expanded skills */}
            {skillsOpened &&
                <ul className='skills-list second-skills-list'>
                    <p>Experienced Consultant and Lead Auditor offering a comprehensive suite of regulatory, quality, and compliance solutions including Transition to EUMDR, Technical Files, MDD/MDR, MDSAP gap assessments and transition to MDSAP/ISO 13485:2016, ISO 9001:2015, post-market surveillance, internal audit and supplier audit program and support, risk management, training, Sterilization and more.
                        In-depth expertise of current relevant national and international regulations and standards affecting medical device are invaluable to his clients navigating in ever-evolving markets. Areas of specialty include a vast working knowledge of:
                    </p>
                    <li>EUMDR Regulations</li>
                    <li>MDSAP Regulations</li>
                    <li>FDA Quality System Regulations</li>
                    <li>ISO 9001/ISO 13485</li>
                    <li>ISO 14971:2019</li>
                    <li>ISO31000</li>
                    <li>CE marking requirements and current Medical Device Directive</li>
                    <li>Design Controls including, FMEA and risk analysis, validation/verification, design input, output, and reviews</li>
                    <li>Subcontractor auditing and certification</li>
                </ul>
            }
            <center><button className='more-skills-btn' onClick={ToggleSkills}>{btnText}</button></center>
            <br />
        </div>
    );
}