import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const dummyResources = {
  "MCA-101": {
    notes: [
      {
        name: "MCA-101 notes",
        link: "https://drive.google.com/file/d/1Yt5htRTt800PcwdPvytSTlQ18EUcFh3V/view?usp=drive_link",
      },
    ],
    papers: [
      {
        name: "2021-End Term-C(101)",
        link: "https://drive.google.com/file/d/1XfYyLelDo13y4y1SoZ5OSc6fvo3lQbrc/view?usp=drive_link",
      },
      {
        name: "2021-MST-01-C (101)",
        link: "https://drive.google.com/file/d/1vOYu4kXGOrwgMst-4izhbShOl2QASM-c/view?usp=drive_link",
      },
      {
        name: "2021-MST-02-C (101)",
        link: "https://drive.google.com/file/d/14Gn3EDnMakpg2EaNhOheRpMfoDS6rKr2/view?usp=drive_link",
      },
      {
        name: "2022-End Term- C(101)",
        link: "https://drive.google.com/file/d/1XgRVuiVW-IpnHCpFF12GClFRmCU6GuDy/view?usp=drive_link",
      },
      {
        name: "2022-MST-01-C(101)",
        link: "https://drive.google.com/file/d/1DlOExlzMpfli6oCpLEOeSBBS9m9oCcOl/view?usp=drive_link",
      },
      {
        name: "2022-MST-02-C(101)",
        link: "https://drive.google.com/file/d/1z3KeT3xPhTxzRzDTYGWKRpQvEqhC3zyc/view?usp=drive_link",
      },
    ],
  },

  "MCA-103": {
    notes: [
      {
        name: "mca-103 notes",
        link: "https://drive.google.com/file/d/1uj3d3BfRdAaHhP2q_aV6lod6uBWj5ySC/view?usp=drive_link",
      },
    ],
    papers: [
      {
        name: "2021-End-Sem-Comp org & arch (103)",
        link: "https://drive.google.com/file/d/1aO2byOVGSgMgB3aHyAh7Wqk18mNT7Gt7/view?usp=drive_link",
      },
      {
        name: "2021-MST-01-comp org & arch (103)",
        link: "https://drive.google.com/file/d/1keKyoCKehnL4W5PHyZ5RNybsgRwqPZvD/view?usp=drive_link",
      },
      {
        name: "2021-MST-02-Comp org & arch (103)",
        link: "https://drive.google.com/file/d/1SDlWfF8s-73-wYuLbHhWU4570KT4wJc1/view?usp=drive_link",
      },
      {
        name: "2022-End-sem",
        link: "https://drive.google.com/file/d/1n8roWRboUFzI-8bBO3VulaGLbW6m7VwY/view?usp=drive_link",
      },
      {
        name: "2022-MST-01",
        link: "https://drive.google.com/file/d/1HCD32KhwEDSOSG0JC05eRbVdUnytt4mm/view?usp=drive_link",
      },
      {
        name: "2022-MST-02",
        link: "https://drive.google.com/file/d/19uJjTLxST_rhf6Bo6IR7c2t7rrznuHkC/view?usp=drive_link",
      },
    ],
  },

  "MCA-105": {
    notes: [
      {
        name: "mca-105 notes",
        link: "https://drive.google.com/file/d/1HTdeofW5kJSLvwiVu_s8_rURBERn4LI9/view?usp=drive_link",
      },
    ],
    papers: [
      {
        name: "2021-DM-End Sem",
        link: "https://drive.google.com/file/d/1Jv5gvaPOTLlFeVWPblLH2yBoKxxfH8jG/view?usp=drive_link",
      },
      {
        name: "2021-DM-Mid1",
        link: "https://drive.google.com/file/d/1dqhX80E_MCfYExmMDFQ9ZN6vSBdFHhpZ/view?usp=drive_link",
      },
      {
        name: "2021DM-Mid2",
        link: "https://drive.google.com/file/d/19T2W3mMDGUMquUXq4EgmxkbVojhfRjBT/view?usp=drive_link",
      },
      {
        name: "2022-End-sem",
        link: "https://drive.google.com/file/d/1GkU-2-pa1ftLXADwoTf6v3OaCjfkjPaY/view?usp=drive_link",
      },
      {
        name: "2022-MST-01",
        link: "https://drive.google.com/file/d/19-OMyOq_Esd5kksvFascCyuonzanjHMt/view?usp=drive_link",
      },
      {
        name: "2022-MST-02",
        link: "https://drive.google.com/file/d/1odCIC-b2d5Zyl5Hx3bzo_Kh5lacka5y-/view?usp=drive_link",
      },
    ],
  },

  "MCA-107": {
    notes: [
      {
        name: "8085 Microprocessor - Ramesh Gaonkar (107)",
        link: "https://drive.google.com/file/d/1kJUwvDCexXGaHfCk7p4ht4tLfxHCuNrs/view?usp=drive_link",
      },
      {
        name: "Microprocessor notes by Bharat",
        link: "https://drive.google.com/file/d/1ETOsKZohySveuoPIblmik0C9-_--DgOq/view?usp=drive_link",
      },
    ],
    papers: [
      {
        name: "2021-MP (107) End Sem",
        link: "https://drive.google.com/file/d/1GHOkldeYgjt68rjzPAJmlGcmk32DCJjc/view?usp=drive_link",
      },
      {
        name: "2021-MP (107) MST-01",
        link: "https://drive.google.com/file/d/170oOempITGazbUN5NeOV4ySDsxfNrBj3/view?usp=drive_link",
      },
      {
        name: "2021-MP (107) MST-02",
        link: "https://drive.google.com/file/d/1hJ4dxuKcWTfQimb37Jfz2q0A0YukM_0Y/view?usp=drive_link",
      },
      {
        name: "2022-MST-02",
        link: "https://drive.google.com/file/d/18dGqmTN4cdhR4xuW90KDt4iNml5yamG7/view?usp=drive_link",
      },
    ],
  },

  "MCA-109": {
    notes: [
      {
        name: "mca-109 notes",
        link: "https://drive.google.com/file/d/1wbe9dMQ0QdK03_ADAhSiGBPjj-EJMAkG/view?usp=drive_link",
      },
    ],
    papers: [
      {
        name: "2021-FOM (109)-MST-01",
        link: "https://drive.google.com/file/d/1ut5G3JL-rblCDiN7Fz8y3BCDl7WHf6Bf/view?usp=drive_link",
      },
      {
        name: "2021-FOM (109)-MST-02",
        link: "https://drive.google.com/file/d/1dtDuUKKp2GGYxgvEfZfv7T9jC2PqLJjZ/view?usp=drive_link",
      },
      {
        name: "2022-FOM (109)-End Sem",
        link: "https://drive.google.com/file/d/1TILP2capabPAV1J58QMLWWc027OCJBZA/view?usp=drive_link",
      },
    ],
  },
  "MCA-102": {
    notes: [
      {
        name: "mca-102 notes",
        link: "https://drive.google.com/file/d/1kKsRZVzLa3N1lBynKHNbnrCbxauQ3wGS/view?usp=drive_link",
      },
    ],
    papers: [
      {
        name: "102_DS_2022Mar_2nd(MST1)",
        link: "https://drive.google.com/file/d/11HDrA3Ior5mlWPfBxyfx2F_HaCAMOgPt/view?usp=drive_link",
      },
      {
        name: "102_DS_2022Apr_2nd(MST2)",
        link: "https://drive.google.com/file/d/1T8XxmZewJ7KGmGe_RnWo9QAFuRk5s17y/view?usp=drive_link",
      },
      {
        name: "2102_DS_2022May_2nd(End Term)",
        link: "https://drive.google.com/file/d/1dDS9tJfClfa-7KsIKHf0QDk_PL0iE7CT/view?usp=drive_link",
      },
      {
        name: "2021 End Sem",
        link: "https://drive.google.com/file/d/12MFGeAzwX8FGGCpxh6wf-DnyVrytWMZ3/view?usp=drive_link",
      },
      {
        name: "2023",
        link: "https://drive.google.com/file/d/1KthUT12c4FwBOI2k3xvHD33pg8O6tlJK/view?usp=drive_link",
      },
      {
        name: "MST-01 2023",
        link: "https://drive.google.com/file/d/1EwG47F-cdhQEom_MaveZIsCBll45beBQ/view?usp=drive_link",
      },
      {
        name: "MST-02 2023",
        link: "https://drive.google.com/file/d/16OpBglxLkR-uZU9i1NlgeLVQzmYpXfEF/view?usp=drive_link",
      },
    ],
  },
  "MCA-104": {
    notes: [
      {
        name: "OOP-NOTES-final",
        link: "https://drive.google.com/file/d/1iA64lNyzEyX2pXVHdd0Od8sy1Pw4bLVY/view?usp=drive_link",
      },
    ],
    papers: [
      {
        name: "2024 MST-01",
        link: "https://drive.google.com/file/d/1RHRHK7Vyfc2FufBq_RmiCt7FgtjUvFSp/view?usp=drive_link",
      },
      {
        name: "2024 MST-02",
        link: "https://drive.google.com/file/d/1I0p2K6RxxsytDbNeoE9OEbvzcjJ7N0Hv/view?usp=drive_link",
      },
      {
        name: "MCA104 OOPJ 2021-22 Sem2 EndTerm",
        link: "https://drive.google.com/file/d/1kn6MdCKhexZ9hYe3aM9f0mKLZb0N3kze/view?usp=drive_link",
      },
      {
        name: "MCA104 OOPJ 2021-22 Sem2 Mid1",
        link: "https://drive.google.com/file/d/1g3bXt4OFQJpCroGdGjBhK8C14ytVltZ2/view?usp=drive_link",
      },
    ],
  },
  "MCA-106": {
    notes: [
      {
        name: "DAA or Algorithms",
        link: "https://drive.google.com/file/d/1FEHJjAySWyT6e0MPirU2uQQaSR-3kRS4/view?usp=drive_link",
      },
    ],
    papers: [
      {
        name: "End Sem All 2023",
        link: "https://drive.google.com/file/d/1GfKPzeE-0Y13m493MSFr3sy-2gpgkh6z/view?usp=drive_link",
      },
      {
        name: "MST-01 2023",
        link: "https://drive.google.com/file/d/1hcq3FBjAHsamqk1_Fv1Sz0rYNAwXFO5x/view?usp=drive_link",
      },
      {
        name: "MST-02 2023",
        link: "https://drive.google.com/file/d/1FJst3XpblH3gvTJIs0zsBmpUJp0V-p6D/view?usp=drive_link",
      },
    ],
  },
  "MCA-108": {
    notes: [
      {
        name: "mca-108 notes",
        link: "https://drive.google.com/file/d/1Cn6JBmXAciVs0NO7sr9aAeKm_4hk3S12/view?usp=drive_link",
      },
    ],
    papers: [
      {
        name: "End Sem All 2023",
        link: "https://drive.google.com/file/d/1qFORpKMgtsyVgv4TB0m3DJYjOHQiDT-v/view?usp=drive_link",
      },
      {
        name: "MST-01 All 2023",
        link: "https://drive.google.com/file/d/13bpMDmDrsM2snjRU-TdMSJLVFFe-3FxB/view?usp=drive_link",
      },
      {
        name: "MST-02 All 2023",
        link: "https://drive.google.com/file/d/1_5fVAe8RfKaYNGAcmurbxiR2IVlPkXiA/view?usp=drive_link",
      },
    ],
  },
  "MCA-110": {
    notes: [
      {
        name: "mca-110 notes",
        link: "https://drive.google.com/file/d/1fHlMmCL_n_FqCUgSpqA2BtaupYApBreN/view?usp=drive_link",
      },
    ],
    papers: [
      {
        name: "2022-23",
        link: "https://drive.google.com/file/d/1keHb13VIpbErD5jEJJrjSzX5on5X_mAE/view?usp=drive_link",
      },
      {
        name: "End Sem All 2023",
        link: "https://drive.google.com/file/d/1oNXOCNPMq0YPRJZHsVDbH1RwGjaUkc0a/view?usp=drive_link",
      },
    ],
  },
  "MCA-201": {
    notes: [
      {
        name: "mca-201 notes",
        link: "https://drive.google.com/file/d/13WQa_uaPEMczpZRKjaej87K2AX5yC8UB/view?usp=drive_link",
      },
    ],
    papers: [
      {
        name: "2023PYQs",
        link: "https://drive.google.com/file/d/1oxFiRa7LAkJZsZNIUvhrY1PyJVOufT87/view?usp=drive_link",
      },
    ],
  },
  "MCA-203": {
    notes: [
      {
        name: "SE FINAL NOTES BY MUKESH.D",
        link: "https://drive.google.com/file/d/1xxOc0BWsBZkA0Q0krzGhuaJ9lLy0tZhd/view?usp=drive_link",
      },
    ],
    papers: [
      {
        name: "2023PYQs",
        link: "https://drive.google.com/file/d/1xxOc0BWsBZkA0Q0krzGhuaJ9lLy0tZhd/view?usp=drive_link",
      },
    ],
  },
  "MCA-205": {
    notes: [
      {
        name: "Data Communications and Networking By Behrouz A.Forouzan",
        link: "https://drive.google.com/file/d/1K5BlpgS8BoNllplMEcVHsD-it13D5uPZ/view?usp=drive_link",
      },
    ],
    papers: [
      {
        name: "PREVIOUS_YEARS_CN",
        link: "https://drive.google.com/file/d/1hRya9GzJXojyHCl5I6u9nR5Ab3DmzGev/view?usp=drive_link",
      },
    ],
  },
  "MCA-207": {
    notes: [
      {
        name: "Flat-Notes",
        link: "https://drive.google.com/file/d/1qwqgAncIIQWYTHF63NhGe23mX7q7EXvY/view?usp=drive_link",
      },
    ],
    papers: [
      {
        name: "207_Automata_2021-2022_EndTerm",
        link: "https://drive.google.com/file/d/1ScM_2zSAkdKzmrC4Ori-zf_3qKsqslW2/view?usp=drive_link",
      },
      {
        name: "207_FLAT_2022-2023_End_Sol",
        link: "https://drive.google.com/file/d/19x1yVLdtMUU48XnOmZlMWg8lKmfH6u1r/view?usp=drive_link",
      },
      {
        name: "207_FLAT_2022-2023_Odd_Mid1",
        link: "https://drive.google.com/file/d/1oHCfmtSvQ7ESlddjRhsPQUUzhN-_d7ay/view?usp=drive_link",
      },
      {
        name: "MST-01 2024",
        link: "https://drive.google.com/file/d/1EcAHEEGmCodjonOEY42jjK5jn2SHBKOT/view?usp=drive_link",
      },
    ],
  },
  "MCA-209": {
    notes: [
      {
        name: "SM 1-80_merged",
        link: "https://drive.google.com/file/d/1iFFgTvdZtay0oOcjqHVxlPdwcwda78-G/view?usp=drive_link",
      },
    ],
    papers: [
      {
        name: "2023PYQs",
        link: "https://drive.google.com/file/d/1m7Ies92HyXyozAJ9eBvW6Ah27S0zF-IX/view?usp=drive_link",
      },
    ],
  },
  "MCA-202": {
    notes: [
      {
        name: "mca-202 notes",
        link: "https://drive.google.com/file/d/1XuCGfgae7X5fNmD0zoisJihqAx1plwqP/view?usp=drive_link",
      },
    ],
    papers: [
      {
        name: "2024-1",
        link: "https://drive.google.com/file/d/1sLLWJx80dHs217JafF937aEvCsRHVtBc/view?usp=drive_link",
      },
      {
        name: "2024-2",
        link: "https://drive.google.com/file/d/1iPOA7z65972PiZE-o2GCdBN2Y_NWYTpl/view?usp=drive_link",
      },
      {
        name: "2024-3A",
        link: "https://drive.google.com/file/d/1KInbEomH6_lEHGQKQI9H7nJ2rnwfZXBj/view?usp=drive_link",
      },
      {
        name: "2024-3B",
        link: "https://drive.google.com/file/d/1xgxdKUYHW07afkgqNohiCvn2xrdzpAKC/view?usp=drive_link",
      },
    ],
  },
  "MCA-204": {
    notes: [
      {
        name: "CSS",
        link: "https://drive.google.com/file/d/1FfJSEKog9w9Xd0P93HCXw3-yMQjFKtmY/view?usp=drive_link",
      },
      {
        name: "es6_tutorial",
        link: "https://drive.google.com/file/d/1-C0-_JcMmJX8IXxa46INa2YqON49GvRU/view?usp=drive_link",
      },
      {
        name: "HTML Reference",
        link: "https://drive.google.com/file/d/1hjykdjWXACxiiAXqQUQu7153S8FlaXqG/view?usp=drive_link",
      },
      {
        name: "Learn HTML and CSS with w3schools",
        link: "https://drive.google.com/file/d/1CZG2nvrT3yDRZo50mgMIKuNCMVwcBVbh/view?usp=drive_link",
      },
    ],
    papers: [
      {
        name: "2015-3",
        link: "https://drive.google.com/file/d/18Tugbp0fzqT8qAFrfyKNt6LhsVtsEYQ_/view?usp=drive_link",
      },
      {
        name: "2024-1",
        link: "https://drive.google.com/file/d/1EAQGHwhj7h1jDOlYjWn8eBTd3e_I0IuN/view?usp=drive_link",
      },
      {
        name: "2024-2",
        link: "https://drive.google.com/file/d/1HrAn69Cs3yH4sz7LQpfy3m-ToNfsT8wN/view?usp=drive_link",
      },
      {
        name: "2024-3A(1)",
        link: "https://drive.google.com/file/d/1ofbTFnSnCVzWUmuItp0e-rR5oUtvUWeN/view?usp=drive_link",
      },
      {
        name: "2024-3A",
        link: "https://drive.google.com/file/d/1wkLE5VN8AsLRVKnGg8zGhiO56EiGHWkN/view?usp=drive_link",
      },
    ],
  },
  "MCA-206": {
    notes: [
      {
        name: "Data_Analyst",
        link: "https://drive.google.com/file/d/16IwFZDLLNmU27WaFXPx2V5mbam4naZSI/view?usp=drive_link",
      },
    ],
    papers: [
      {
        name: "2022-3 sol",
        link: "https://drive.google.com/file/d/1o64DF1_bG6CCBaYHiK7V2G9L0FbqZpUm/view?usp=drive_link",
      },
      {
        name: "MST-01 paper",
        link: "https://drive.google.com/file/d/1f6LnTkaesA5Yi0uVgxdClhzNpNut3fXd/view?usp=drive_link",
      },
      {
        name: "MST-02 paper",
        link: "https://drive.google.com/file/d/1wDQSOoms-N26pzz2ndcv19-EpXo0YHU8/view?usp=drive_link",
      },
    ],
  },
  "MCA-208": {
    notes: [
      {
        name: "GT LectureNotes",
        link: "https://drive.google.com/file/d/1UJBMFBT7HEMJsWs_MUUX6a0pgnoJSJWX/view?usp=drive_link",
      },
    ],
    papers: [
      {
        name: "2020-1",
        link: "https://drive.google.com/file/d/1k_dgqeIHANvmKpd9HLcRGG0APDYZaxTg/view?usp=drive_link",
      },
      {
        name: "2020-2",
        link: "https://drive.google.com/file/d/130p2T59huIzIGas6ykgkUuqNIJcl9rnI/view?usp=drive_link",
      },
      {
        name: "2020-3",
        link: "https://drive.google.com/file/d/1zBpsoVow4WtNH7rOVlMLDUOJjsCLPvPz/view?usp=drive_link",
      },
      {
        name: "2023-1",
        link: "https://drive.google.com/file/d/12tQkw8iL3VFWKpRm_BnO3lrI1YjVhQhh/view?usp=drive_link",
      },
      {
        name: "2023-2",
        link: "https://drive.google.com/file/d/1S3ed7u53pNQMAHNgkuhEbaqfm1KwEV-K/view?usp=drive_link",
      },
      {
        name: "2023-3A",
        link: "https://drive.google.com/file/d/1KQdpiMN7GX5KWfrhY3mYGcw16VnBx7dJ/view?usp=drive_link",
      },
      {
        name: "2023-3B",
        link: "https://drive.google.com/file/d/1JQtovJEh6lsQcZKECyVqB4PdVzmXiS_r/view?usp=drive_link",
      },
    ],
  },
  "MCA-210": {
    notes: [
      {
        name: "mca-210 notes",
        link: "https://drive.google.com/file/d/1N46vSkT6yO_-rIZCl3TALt8_ZyjDNms1/view?usp=drive_link",
      },
    ],
    papers: [
      {
        name: "2021",
        link: "https://drive.google.com/file/d/1wBYSRoXrUMvxZeSxDt8LelXm7zQ5KWDh/view?usp=drive_link",
      },
      {
        name: "2024",
        link: "https://drive.google.com/file/d/19zXFqz-xLAuRe5R_tjTcVRPxKfaYewDz/view?usp=drive_link",
      },
    ],
  },
  "MCA-301": {
    notes: [
      {
        name: "cloud_computing_tutorial",
        link: "https://drive.google.com/file/d/1urrl1jLq-4RQDBD6w_tBWgA5uZhjerH7/view?usp=drive_link",
      },
    ],
    papers: [
      {
        name: "301 Cloud Computing Mid 1 (2022-23)",
        link: "https://drive.google.com/file/d/1iCyO7auEGHDm6n2cLf1hyvcsze0vc-Ys/view?usp=drive_link",
      },
      {
        name: "301 Cloud Computing Mid 2 (2022-23)",
        link: "https://drive.google.com/file/d/1JRjndjBC_AFG9-zmM0fePXAojtH-sM79/view?usp=drive_link",
      },
      {
        name: "2022-1",
        link: "https://drive.google.com/file/d/1Hfu9NM7wz30Km2pcDQ52BQSg9wLoOUM8/view?usp=drive_link",
      },
      {
        name: "2022-2",
        link: "https://drive.google.com/file/d/1bzFSbbxiD9lPfWEqR2hRv-TUfgbvbxIM/view?usp=drive_link",
      },
      {
        name: "2024-1",
        link: "https://drive.google.com/file/d/1EbTFF3JAdNoKmKox7GRiIKzVKtyMaQ4L/view?usp=drive_link",
      },
      {
        name: "2024-2",
        link: "https://drive.google.com/file/d/1fHX3sxPQUL3tohq0nqIgaXacXTNCU3ez/view?usp=drive_link",
      },
      {
        name: "2024-3(1)",
        link: "https://drive.google.com/file/d/1e5t5wOM2s4Lr97QbYS06GlClX4ooZAxD/view?usp=drive_link",
      },
      {
        name: "2024-3",
        link: "https://drive.google.com/file/d/1ueBSqrh8p2ZYfszsXzZSBRLiDdvHVgFZ/view?usp=drive_link",
      },
    ],
  },
  "MCA-303": {
    notes: [
      {
        name: "CYBER SECURITY",
        link: "https://drive.google.com/file/d/1SHr_vUWreZF88f87OSFNO4W0KKKU0sPt/view?usp=drive_link",
      },
    ],
    papers: [
      {
        name: "mail cyber security 2nd sessional .docx",
        link: "https://drive.google.com/file/d/12KfX_xF0szzWu8-z4LJpj1zv2FVpJ_w9/view?usp=drive_link",
      },
      {
        name: "mid-01",
        link: "https://drive.google.com/file/d/1LAq9KiEszd29YbOdICsA8G6Od_6UGnDi/view?usp=drive_link",
      },
    ],
  },
  "MCA-305": {
    notes: [
      {
        name: "natural_language_processing_tutorial",
        link: "https://drive.google.com/file/d/1xsx6m_Djp_uT68-89TI0qMuA583AyLk4/view?usp=drive_link",
      },
    ],
  },
  "MCA-307": {
    notes: [
      {
        name: "MACHINE LEARNING",
        link: "https://drive.google.com/drive/folders/1-LftfUqGKnma1UWrhvRNCXIcANJ1bCVa?usp=drive_link",
      },
    ],
  },
  "MCA-309": {
    notes: [
      {
        name: "Neural-Networks-and-Fuzzy-Logic-notes",
        link: "https://drive.google.com/drive/folders/1UCrhadFOYoGpG5r2QdTvXAT5WM_nIbbO?usp=drive_link",
      },
    ],
  },
};

// const SubjectPage = () => {
//   const { number, code } = useParams();
//   const navigate = useNavigate();
//   const subjectResources = dummyResources[code];

//   const renderSection = (title, items) => (
//     <div>
//       <h3 className="section-title">{title}</h3>
//       <div className="courses-grid">
//         {items.map((item, i) => (
//           <div className="course-card" key={i}>
//             <h3 className="course-title">{item.name}</h3>
//             <a
//               href={encodeURI(item.link)}
//               download
//               className="course-button"
//             >
//               Download PDF →
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="courses-section" style={{ paddingTop: "6rem" }}>
//       <h2 className="section-title">Resources for {code}</h2>
//       <p style={{ textAlign: "center", marginBottom: "1rem" }}>
//         Semester {number}
//       </p>

//       <div style={{ textAlign: "center", marginBottom: "2rem" }}>
//         <button
//           className="course-button"
//           onClick={() => navigate(`/mca/semester/${number}`)}
//         >
//           ← Back to Semester {number}
//         </button>
//       </div>

//       {subjectResources?.notes &&
//         renderSection("📘 Lecture Notes", subjectResources.notes)}
//       {subjectResources?.papers &&
//         renderSection("🧾 Previous Year Papers", subjectResources.papers)}
//     </div>
//   );
// };

// export default SubjectPage;

const SubjectPage = () => {
  const { number, code } = useParams();
  const navigate = useNavigate();
  const subjectResources = dummyResources[code];

  const renderSection = (title, items) => (
    <div>
      <h3 className="section-title">{title}</h3>
      <div className="courses-grid">
        {items.map((item, i) => (
          <div className="course-card" key={i}>
            <h3 className="course-title">{item.name}</h3>
            <a
              href={encodeURI(item.link)}
              target="_blank"
              rel="noopener noreferrer"
              className="course-button"
            >
              Download PDF →
            </a>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="courses-section" style={{ paddingTop: "6rem" }}>
      <h2 className="section-title">Resources for {code}</h2>
      <p style={{ textAlign: "center", marginBottom: "1rem" }}>
        Semester {number}
      </p>

      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <button
          className="course-button"
          onClick={() => navigate(`/mca/semester/${number}`)}
        >
          ← Back to Semester {number}
        </button>
      </div>

      {subjectResources?.notes &&
        renderSection("📘 Lecture Notes", subjectResources.notes)}
      {subjectResources?.papers &&
        renderSection("🧾 Previous Year Papers", subjectResources.papers)}
    </div>
  );
};

export default SubjectPage;
