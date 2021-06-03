import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const specificationsRepository = new SpecificationsRepository();

const specificationsUseCase = new CreateSpecificationUseCase(
  specificationsRepository,
);

const createSpecificationController = new CreateSpecificationController(
  specificationsUseCase,
);

export { createSpecificationController };
