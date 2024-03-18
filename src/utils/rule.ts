import { Linter } from 'eslint'

export function createNSRules(rules: Linter.RulesRecord, namespace: string): Linter.RulesRecord {
  if (!rules) return {}

  return Object.entries(rules).reduce((rules, [key, value]) => {
    const hasNs = namespace == null || key.match(new RegExp(`^${namespace}\/`))
    const ruleName = hasNs ? key : `${namespace}/${key}`
    rules[ruleName] = value
    return rules
  }, {} as Linter.RulesRecord)
}
