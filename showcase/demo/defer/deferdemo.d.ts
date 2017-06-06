import { Car } from '../domain/car';
import { CarService } from '../service/carservice';
import { Message } from '../../../components/common/api';
export declare class DeferDemo {
    private carService;
    cars: Car[];
    msgs: Message[];
    constructor(carService: CarService);
    initData(): void;
}
