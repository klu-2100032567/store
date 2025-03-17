import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Store } from './store.entity';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Injectable()
export class StoresService {
  constructor(
    @InjectRepository(Store)
    private readonly storeRepository: Repository<Store>,
  ) {}

  // Create a new store
  async create(createStoreDto: CreateStoreDto): Promise<Store> {
    const store = this.storeRepository.create(createStoreDto);
    return this.storeRepository.save(store);
  }

  // Retrieve all stores
  async findAll(): Promise<Store[]> {
    return this.storeRepository.find();
  }

  // Retrieve a specific store by ID
  async findOne(id: number): Promise<Store> {
    return (await this.storeRepository.findOne({ where: { id } }))!;
  }

  // Update a store by ID
  async update(id: number, updateStoreDto: UpdateStoreDto): Promise<Store> {
    await this.storeRepository.update(id, updateStoreDto);
    return this.findOne(id);
  }

  // Delete a store by ID
  async remove(id: number): Promise<void> {
    await this.storeRepository.delete(id);
  }
}
