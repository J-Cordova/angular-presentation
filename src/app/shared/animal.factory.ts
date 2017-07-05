import { Animal } from './animal.model';
import { AnimalType } from './animaltype.enum';

export class AnimalFactory {
    public static CreateAnimal(data): Animal
    {
        const animal: Animal =  new Animal();
        animal.Type = parseInt(data.Type, 10) || AnimalType.Dog;
        animal.Avatar = animal.Type === AnimalType.Dog ? 'Dog' : 'Cat';
        animal.Description = data.Description || '';
        animal.Name = data.Name || 'Doggy';
        animal.Picture = data.Picture || (animal.Type === AnimalType.Dog ?
                                         '../../assets/Dog.svg' :
                                         '../../assets/Cat.svg');

        return animal;
    }
}
