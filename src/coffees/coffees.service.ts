import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
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

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
    return createCoffeeDto;
  }

  updateCoffee(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      //update the existing entity
    }
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
