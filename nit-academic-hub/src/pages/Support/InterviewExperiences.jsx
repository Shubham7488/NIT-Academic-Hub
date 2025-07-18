// export default InterviewExperiences;

import React from 'react';
import '../../styles/InterviewExperiences.css';

const experiencesByYear = {
    2025: [
        {
            id: 1,
            company: 'Amdocs',
            ctc: '10 LPA',
            logo: 'amdocs.png',
            pdf: 'Amdocs - 2025.pdf',
        },
        {
            id: 2,
            company: 'Citibank',
            ctc: '13 LPA',
            logo: 'Citibank.png',
            pdf: 'Citibank - 2025.pdf',
        },
        {
            id: 3,
            company: 'FICO',
            ctc: '10.2 LPA',
            logo: 'fico.jpg',
            pdf: 'FICO - 2025.pdf',
        },
        {
            id: 4,
            company: 'Aryaka Networks',
            ctc: '15 LPA',
            logo: 'aryaka_unbtkq.png',
            pdf: 'Aryaka - 2025.pdf',
        },
        {
            id: 5,
            company: 'HSBC',
            ctc: '--',
            logo: 'hsbc-logo-col_mq99xd.png',
            pdf: 'HSBC - 2025.pdf',
        },
        {
            id: 6,
            company: 'IBM',
            ctc: '18.5 LPA',
            logo: 'ibm-logo_nndwvd.svg',
            pdf: 'IBM - 2025.pdf',
        },
        {
            id: 7,
            company: 'SAP Labs',
            ctc: '20.16 LPA',
            logo: 'sap_labs_rbkurb.png',
            pdf: 'SAP Labs - 2025.pdf',
        },
        {
            id: 8,
            company: 'Trianz Digital',
            ctc: '9 LPA',
            logo: 'trianz-logo_i5ntjz.png',
            pdf: 'Trianz - 2025.pdf',
        },
        {
            id: 9,
            company: 'Xenonstack',
            ctc: '7.5 LPA',
            logo: 'xenonstack_ifwrhy.png',
            pdf: 'Xenonstack - 2025.pdf',
        },
        {
            id: 10,
            company: 'Yamaha Motors',
            ctc: '10 LPA',
            logo: 'yamaha_gnyk8n.png',
            pdf: 'Yamaha - 2025.pdf',
        },
        {
            id: 11,
            company: 'Unthinkable Solutions',
            ctc: '10 LPA',
            logo: 'unthinkable_rwq5bn.png',
            pdf: 'Unthinkable Solutions - 2025.pdf',
        },
    ],
    2021: [
        {
            id: 101,
            company: 'Accolite',
            ctc: '11 LPA',
            logo: 'accolite_izt93p.png',
            pdf: 'Accolite_2021.pdf',
        },
        {
            id: 102,
            company: 'Amdocs',
            ctc: '7.5 LPA',
            logo: 'amdocs.png',
            pdf: 'Amdocs_2021.pdf',
        },
        {
            id: 103,
            company: 'American Express',
            ctc: '14.5 LPA',
            logo: 'amex_g7u5su.png',
            pdf: 'American_Express_2021.pdf',
        },
        {
            id: 104,
            company: 'Goldman Sachs',
            ctc: '23 LPA',
            logo: 'GS._thfndi.png',
            pdf: 'Goldman_Sachs.pdf',
        },
        {
            id: 105,
            company: 'Rebel Foods',
            ctc: '12 LPA',
            logo: 'rebel_foods_dtlbeh.png',
            pdf: 'Rebel_Foods_2021.pdf',
        },
        {
            id: 106,
            company: 'SAP Labs',
            ctc: '26 LPA',
            logo: 'sap_labs_rbkurb.png',
            pdf: 'SAP_2021.pdf',
        },
        {
            id: 107,
            company: 'ZopSmart',
            ctc: '10.6 LPA',
            logo: 'zopsmart_logo_aeq5fv.png',
            pdf: 'Zopsmart_2021.pdf',
        },
    ],
    2020: [
        {
            id: 201,
            company: 'Amdocs',
            ctc: '6.9 LPA',
            logo: 'amdocs.png',
            pdf: 'Placement Experience with Amdocs.pdf',
        },
        {
            id: 202,
            company: 'American Express',
            ctc: '13.7 LPA',
            logo: 'amex_g7u5su.png',
            pdf: 'Placement Experience with American Express.pdf',
        },
        {
            id: 203,
            company: 'Aryaka Networks',
            ctc: '10 LPA',
            logo: 'aryaka_unbtkq.png',
            pdf: 'Placement Experience with Aryaka.pdf',
        },
        {
            id: 204,
            company: 'Cloud Analogy',
            ctc: '6.8 LPA',
            logo: 'cloud_analogy_haet4j.png',
            pdf: 'Placement Experience with Cloud Analogy.pdf',
        },
        {
            id: 205,
            company: 'Delhivery',
            ctc: '6.8 LPA',
            logo: 'delhivery_adoyyx.png',
            pdf: 'Placement Experience with Delhivery.pdf',
        },
        {
            id: 206,
            company: 'Deloitte',
            ctc: '7.6 LPA',
            logo: 'deloitte_w2x5do.png',
            pdf: 'Placement Experience with Deloitte.pdf',
        },
        {
            id: 207,
            company: 'Oracle Financial Services Software',
            ctc: '6.4 LPA',
            logo: 'oracle_j4yfjr.png',
            pdf: 'Placement Experience with Oracle.pdf',
        },
        {
            id: 208,
            company: 'Smart Energy Water',
            ctc: '7.5 LPA',
            logo: 'sew_scbthw.png',
            pdf: 'Placement Experience Smart Energy Water.pdf',
        },
        {
            id: 209,
            company: 'ZScaler',
            ctc: '20.1 LPA',
            logo: 'zscaler_eqeizm.png',
            pdf: 'Placement Experience with ZScaler.pdf',
        },
    ],
};

const getLogoSrc = (logo) => {
    try {
        return new URL(`../../assets/companies/${logo}`, import.meta.url).href;
    } catch {
        return null;
    }
};

const InterviewExperiences = () => {
    return (
        <div className="interview-container">
            <h1 className="interview-heading">Interview Experiences</h1>
            {Object.keys(experiencesByYear).map((year) => (
                <div key={year} className="interview-year-group">
                    <h2 className="interview-year">{year}</h2>
                    <div className="interview-cards">
                        {experiencesByYear[year].map((exp) => {
                            const logoSrc = getLogoSrc(exp.logo);
                            return (
                                <div className="interview-card" key={exp.id}>
                                    <div className="interview-card-left">
                                        {logoSrc ? (
                                            <img src={logoSrc} alt={exp.company} className="interview-logo" />
                                        ) : (
                                            <div className="interview-placeholder-logo" />
                                        )}
                                        <div>
                                            <h3 className="interview-company">{exp.company}</h3>
                                            <p className="interview-ctc">CTC: {exp.ctc}</p>
                                        </div>
                                    </div>
                                    <a
                                        href={`/resources/interview-experiences/${exp.pdf}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="interview-btn"
                                    >
                                        Read Experience →
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InterviewExperiences;