import { FakeRepositoryAreaExpertise } from '@modules/works/repositories/fakes/AreaExpertise.fakeRepository';
import { ConflictException } from '@nestjs/common';
import { ServiceAreaExpertise } from '../areaExpertise.service';

let fakeRepositoryAreaExpertise: FakeRepositoryAreaExpertise;
let serviceAreaExpertise: ServiceAreaExpertise;

describe('Create Area Expertise - SERVICES', () => {
  beforeEach(() => {
    fakeRepositoryAreaExpertise = new FakeRepositoryAreaExpertise();
    serviceAreaExpertise = new ServiceAreaExpertise(
      fakeRepositoryAreaExpertise,
    );
  });

  describe('successful cases', () => {
    it('should create an area expertise successfully when there is full datas', async () => {
      const result = await serviceAreaExpertise.createAreaExpertise({
        name: 'Area Expertise MocK',
        description: 'this is description',
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result).toHaveProperty('description');
      expect(result.name).toBe('Area Expertise MocK');
    });

    it('should create an area expertise successfully when there not is description', async () => {
      const result = await serviceAreaExpertise.createAreaExpertise({
        name: 'Area Expertise MocK',
      });

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('name');
      expect(result.description).toBe(undefined);
      expect(result.name).toBe('Area Expertise MocK');
    });
  });
  describe('failure cases', () => {
    it('should not create an area expertise when already exists one with the same name and without description', async () => {
      await serviceAreaExpertise.createAreaExpertise({
        name: 'Area Expertise MocK',
      });

      expect(
        serviceAreaExpertise.createAreaExpertise({
          name: 'Area Expertise MocK',
        }),
      ).rejects.toBeInstanceOf(ConflictException);
    });

    it('should not create an area expertise when already exists one with the same name', async () => {
      await serviceAreaExpertise.createAreaExpertise({
        name: 'Area Expertise MocK',
        description: 'this is a description',
      });

      expect(
        serviceAreaExpertise.createAreaExpertise({
          name: 'Area Expertise MocK',
          description: 'this is a description',
        }),
      ).rejects.toBeInstanceOf(ConflictException);
    });
  });
});
