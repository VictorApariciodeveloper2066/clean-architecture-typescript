export type Currency = 'EUR' | 'USD';

export class Price {
  private constructor(
    public readonly amount: number,
    public readonly currency: Currency
  ) {}

  static create(amount: number, currency: Currency): Price {
    if (amount < 0) {
      throw new Error('Amount must be positive');
    }
    return new Price(amount, currency);
  }

  static EUR(amount: number): Price {
    return new Price(amount, 'EUR');
  }

  static USD(amount: number): Price {
    return new Price(amount, 'USD');
  }

  equals(other: Price): boolean {
    return this.amount === other.amount && this.currency === other.currency;
  }
}