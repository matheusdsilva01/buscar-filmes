export type PageItem =
  { type: "page"; value: number; isCurrent: boolean } | { type: "gap" }

export interface PaginationConfig {
  currentPage: number
  totalPages: number
  siblingCount?: number
  showBoundaries?: boolean
}

export class PaginationEngine {
  generate(config: PaginationConfig): PageItem[] {
    const {
      currentPage,
      totalPages,
      siblingCount = 1,
      showBoundaries = true
    } = config

    if (totalPages <= 0) return []

    const totalPageNumbers = siblingCount * 2 + 3 + (showBoundaries ? 2 : 0)

    if (totalPageNumbers >= totalPages) {
      return this.range(1, totalPages).map(p => this.createPage(p, currentPage))
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages)

    const shouldShowLeftDots = leftSiblingIndex > (showBoundaries ? 2 : 1)
    const shouldShowRightDots =
      rightSiblingIndex < (showBoundaries ? totalPages - 1 : totalPages)

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount
      const leftRange = this.range(1, leftItemCount)

      const items: PageItem[] = leftRange.map(p =>
        this.createPage(p, currentPage)
      )
      if (showBoundaries) {
        items.push(this.createGap())
        items.push(this.createPage(totalPages, currentPage))
      } else {
        items.push(this.createGap())
      }
      return items
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount
      const rightRange = this.range(totalPages - rightItemCount + 1, totalPages)

      const items: PageItem[] = []
      if (showBoundaries) {
        items.push(this.createPage(1, currentPage))
        items.push(this.createGap())
      } else {
        items.push(this.createGap())
      }

      return [...items, ...rightRange.map(p => this.createPage(p, currentPage))]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = this.range(leftSiblingIndex, rightSiblingIndex)

      const items: PageItem[] = []
      if (showBoundaries) {
        items.push(this.createPage(1, currentPage))
        items.push(this.createGap())
      } else {
        items.push(this.createGap())
      }

      items.push(...middleRange.map(p => this.createPage(p, currentPage)))

      items.push(this.createGap())
      if (showBoundaries) {
        items.push(this.createPage(totalPages, currentPage))
      }

      return items
    }

    return []
  }

  private range(start: number, end: number): number[] {
    const length = end - start + 1
    return Array.from({ length }, (_, idx) => idx + start)
  }

  private createPage(value: number, current: number): PageItem {
    return { type: "page", value, isCurrent: value === current }
  }

  private createGap(): PageItem {
    return { type: "gap" }
  }
}

export const paginationEngine = new PaginationEngine()
