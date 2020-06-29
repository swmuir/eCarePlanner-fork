import {TargetValue} from './targetvalue';
import {GoalLists} from './goallists';
import {MedicationSummary} from './medicationSummary';
import {Education} from './education';

export const mockEducation: Education[] = [
  {
    topic: 'CKD - Etiology and Progressive Nature of CKD',
    date: '06/15/2013',
    assessmentOfUnderstanding: 'Adequate'
  },
  {
    topic: 'CKD - Complications/Symptoms from Untreated or Progressive Kidney Disease, Including Behavioral Health Issues',
    date: '07/01/2014',
    assessmentOfUnderstanding: 'Adequate'
  }
  ];

export const mockNutrition: Education[] = [
  {
    topic: 'General Diet Counselling',
    date: '06/15/2013',
    assessmentOfUnderstanding: 'Adequate'
  },
  {
    topic: 'Potassium Limitation',
    date: '06/15/2013',
    assessmentOfUnderstanding: 'Adequate - Patient Declined to Discuss'
  },
  {
    topic: 'Sodium Restriction',
    date: '06/15/2013',
    assessmentOfUnderstanding: 'Adequate - Patient Declined to Discuss'
  },
  {
    topic: 'Phosphorous Limitation',
    date: '06/15/2013',
    assessmentOfUnderstanding: 'Adequate - Patient Declined to Discuss'
  },
  {
    topic: 'Heart Healthy Diet',
    date: '06/15/2013',
    assessmentOfUnderstanding: 'Adequate'
  },
  {
    topic: 'Protein Moderation',
    date: '06/15/2013',
    assessmentOfUnderstanding: 'Adequate - Patient Declined to Discuss'
  },
  {
    topic: 'Fluid Intake/Management',
    date: '06/15/2013',
    assessmentOfUnderstanding: 'Adequate'
  }

];

export const mockMedicationSummary: MedicationSummary[] = [
  {
    name: 'lisinopril',
    classOrType: 'Ace Inhibitor',
    dose: '40mg daily',
    doseForm: 'pill',
    prescribedBy: 'Dr Jones',
    startDate: '12/07/2008',
    adverseReactions: 'None'
  }
];

export const mockTargetData: TargetValue[] = [
    {
      measure: 'Systolic Blood Pressure (mm Hg)',
      mostRecentResult: '155',
      date: '02/13/2017',
      target: '<140',
      status: 'high'
    },
    {
      measure: 'Diastolic Blood Pressure (mm Hg)',
      mostRecentResult: '92',
      date: '02/13/2017',
      target: '<80',
      status: 'high'
    },
    {
      measure: 'Potassium (mEq/L)',
      mostRecentResult: '4.8',
      date: '02/05/2017',
      target: '3.5-5.0',
      status: 'good'
    },
    {
      measure: 'Bicarbonate (mEq/L)',
      mostRecentResult: '23',
      date: '02/05/2017',
      target: '>22',
      status: 'good'
    },
    {
      measure: 'Phosphorous (mEq/dL)',
      mostRecentResult: '4.3',
      date: '02/05/2017',
      target: '2.5-4.5',
      status: 'good'
    },
    {
      measure: 'Calcium (mEq/dL)',
      mostRecentResult: '10.1',
      date: '02/05/2017',
      target: '8.5-10.2',
      status: 'good'
    },
    {
      measure: 'Diabetes: A1C (%)',
      mostRecentResult: '8',
      date: '02/05/2017',
      target: '<7',
      status: 'high'
    },
    {
      measure: 'LDL Cholesterol (mg/dL)',
      mostRecentResult: '120',
      date: '02/05/2017',
      target: '<100',
      status: 'high'
    }
  ];

export const mockGoalList: GoalLists = {
    activeClinicalGoals: [
      {
        description: 'Slow CKD Progression',
        rank: 1,
        active: true,
        type: 'clinical'
      },
      {
        description: 'Manage Cardiovascular Risk',
        rank: 2,
        active: true,
        type: 'clinical'
      },
      {
        description: 'Prevent CKD Complications',
        rank: 3,
        active: true,
        type: 'clinical'
      },
      {
        description: 'Maintain Target Thyroid Level',
        rank: 4,
        active: true,
        type: 'clinical'
      },
      {
        description: 'Manage Depression',
        rank: 5,
        active: true,
        type: 'clinical'
      },
      {
        description: 'Manage Congestive Heart Failure',
        rank: 6,
        active: true,
        type: 'clinical'
      },
      {
        description: 'Rehabilitate Angle Injury',
        rank: 7,
        active: true,
        type: 'clinical'
      },
      {
        description: 'Maintain Immunization Status',
        rank: 8,
        active: true,
        type: 'clinical'
      }
    ],
    inactiveClinicalGoals: [],
    activePatientGoals: [
      {
        description: 'Maximize Quality of Life',
        rank: 1,
        active: true,
        type: 'patient'
      },
      {
        description: 'Major Health Events: Kidney Failure, Hospitalizations',
        rank: 2,
        active: true,
        type: 'patient'
      }
    ],
    inactivePatientGoals: []
  };