
export default function Publications() {
    const publicationItems = [
        {name: 'Determining the Biocompatibility of Nanomaterial’s', desc: '26 July 2009 Convergent Technologies.'},
        {name: 'Evaluation of the In Vitro Biocompatibility of Various Thermoplastics with Nanomaterial’s', desc: 'December 2006. Thesis research for MS Biotechnology degree'},
        {name: 'Color, Colorants & Color Measurements', desc: 'Plastics Formulating & Compounding Magazine, issue of May/June 1996.Vol. 2 No.3'},
        {name: 'Electron Beam Compatible Polymers', desc: 'Presented and published at the ANTEC, 62nd Annual Technical Conference of Society of Plastics Engineers, May 16-20, 2004, Volume 111-Special Area 2004.'},
        {name: 'Recycling of Thermoset Flexible Polyurethane Foams into Solid Polyurethane Rubber', desc: 'Presented at ANTEC; Annual Technical Conference of Society of Plastics Engineers held from April 27, May 2, 1997, published in the Conference Proceedings Volume 111-Special Area 1997.'},
    ];

    return (
        <div>
            <center>
                <h1 className='publications-title'>Publications</h1>
            </center>
            <div className='publications-list'>
                {publicationItems.map((item, i) => {
                    return (
                        <div key={i} className='publication'>
                            <h4 className='publication-name'>{item.name}</h4>
                            <p className='publication-desc'>{item.desc}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
