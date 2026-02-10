import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatUSD(amount: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount)
}

export function formatKZT(amount: number): string {
  return new Intl.NumberFormat('kk-KZ', { maximumFractionDigits: 0 }).format(amount) + '₸'
}

export function kztToUsd(kzt: number): number {
  return Math.round(kzt / 480)
}
