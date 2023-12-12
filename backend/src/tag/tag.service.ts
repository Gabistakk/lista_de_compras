import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TagService {

  constructor(private readonly prisma: PrismaService){}

  create(createTagDto: Prisma.TagCreateInput) {
    return this.prisma.tag.create({
      data: createTagDto
    });
  }

  findAll() {
    return this.prisma.tag.findMany();
  }

  findOne(id: string) {
    return this.prisma.tag.findUnique({
      where: {
        id: id
      }
    });
  }

  update(id: string, updateTagDto: Prisma.TagUpdateInput) {
    return this.prisma.tag.update({
      data: updateTagDto,
      where: {
        id: id
      }
    });
  }

  remove(id: string) {
    return this.prisma.tag.delete({
      where: {
        id: id
      }
    });
  }
}
