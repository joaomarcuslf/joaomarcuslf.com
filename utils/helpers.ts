import { Metadata } from "@/types/metadata";

export function flatten<T>(array: T[][]): T[] {
  return array.reduce((acc, val) => acc.concat(val), []);
}

export type KeyPosition = string[]
export type Alphanumeric = "alphanumeric"
export type KeyComparator<T> = (a: T, b: T) => number

export function sortMetadataByRules<T>(array: T[], rule: KeyPosition | KeyComparator<T> | Alphanumeric): T[] {
  type GenericTop = T & Metadata & { top?: boolean }

  function alphanumericSort(a: GenericTop, b: GenericTop): number {
    if (a?.top && !b?.top) {
      return -1
    }
    if (!a?.top && b?.top) {
      return 1
    }
    if (typeof a?.key === "string" && typeof b?.key === "string") {
      return a?.key.localeCompare(b?.key)
    }
    return 0
  }

  if (rule === "alphanumeric") {
    return (array as GenericTop[]).sort(alphanumericSort)
  }

  if (Array.isArray(rule)) {
    return (array as GenericTop[]).sort((a, b) => {
      const aIndex = rule.indexOf(a.key)
      const bIndex = rule.indexOf(b.key)

      if (aIndex === -1 && bIndex === -1) {
        return alphanumericSort(a, b)
      }

      if (aIndex === -1) {
        return 1
      }

      if (bIndex === -1) {
        return -1
      }
      return aIndex - bIndex
    })
  }

  return array.sort(rule)
}
