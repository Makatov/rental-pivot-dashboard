import { GoNoGoCriteria } from '@/types'

export const scaleModelCriteria: GoNoGoCriteria = {
  label: 'SCALE (per model)',
  conditions: [
    '10+ customers',
    'Contribution margin > 40%',
    'Repeating/retained customers',
  ],
}

export const killModelCriteria: GoNoGoCriteria = {
  label: 'KILL (per model)',
  conditions: [
    '< 5 customers after 8 weeks',
    'CAC > $200 via Meta',
    'Zero retention',
  ],
}

export const continueOverallCriteria: GoNoGoCriteria = {
  label: 'CONTINUE (overall)',
  conditions: [
    '25+ total customers',
    'At least 1 model clearly winning',
    'Net positive monthly cashflow',
  ],
}

export const pauseOverallCriteria: GoNoGoCriteria = {
  label: 'PAUSE (overall)',
  conditions: [
    '< 15 customers',
    'All models negative unit economics',
    'Content getting zero engagement',
  ],
}
