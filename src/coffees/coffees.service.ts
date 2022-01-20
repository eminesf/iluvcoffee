import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'moccacino',
      brand: 'nescafe',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((coffee) => coffee.id === +id);

    if (!coffee) {
      throw new HttpException(
        `produto com id #${id} não encontrado`,
        HttpStatus.NOT_FOUND,
      );
    }

    return coffee;
  }

  create(body: Coffee) {
    const id = this.coffees.length + 1;
    return this.coffees.push({ id, ...body });
  }

  updateCoffee(id: number, body: Coffee) {
    const index = this.coffees.findIndex((coffee) => coffee.id === +id);

    if (index < 0) {
      throw new HttpException(
        `café de id #${id} não encontrado`,
        HttpStatus.NOT_FOUND,
      );
    }

    const coffee: Coffee = {
      id,
      ...body,
    };

    this.coffees[index] = coffee;

    return coffee;
  }

  deleteCoffee(id: string) {
    const index = this.coffees.findIndex((coffee) => coffee?.id === +id);

    if (index < 0) {
      throw new HttpException(
        `café de id #${id} não encontrado`,
        HttpStatus.NOT_FOUND,
      );
    }

    this.coffees.splice(index, 1);
  }
}
