import { inject, injectable } from "inversify";
import { TYPES as SHARED_TYPES } from "../../../shared/infrastructure/dependency-injection/types";
import type { IdService } from "../../../shared/infrastructure/id-service/id-service";
import type { ResourceFactory } from "../../domain/factory";
import { TYPES } from "../../infrastructure/dependency-injection/types";
import type { ResourceHttpService } from "../../infrastructure/http-service/resource-http-service";
import { CreateResourceCommand } from "./create-resource.command";
import { CreateResourceHandler } from "./create-resource.interface";

@injectable()
export class CreateResourceHandlerImpl implements CreateResourceHandler {
  constructor(
    @inject(TYPES.ResourceFactory)
    private resourceFactory: ResourceFactory,
    @inject(TYPES.ResourceHttpService)
    private resourceHttpService: ResourceHttpService,
    @inject(SHARED_TYPES.IdService)
    private idService: IdService
  ) {}

  async handle(command: CreateResourceCommand): Promise<void> {
    const resource = this.resourceFactory.create({
      id: this.idService.generate(),
      name: command.name,
    });

    this.resourceHttpService.create(resource);
  }
}
