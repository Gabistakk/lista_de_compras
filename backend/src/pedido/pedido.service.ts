import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Prisma } from '@prisma/client';


@Injectable()
export class PedidoService {


  constructor(private readonly prisma: PrismaService){}


  create(createPedidoDto: Prisma.PedidoCreateInput) {
    return this.prisma.pedido.create({
      data: createPedidoDto
    });
  }

  findAll() {
    return this.prisma.pedido.findMany({});
  }

  findOne(id: number) {
    return this.prisma.pedido.findUnique({
      where: {
        id: id
      }
    });
  }

  update(id: number, updatePedidoDto: Prisma.PedidoUpdateInput) {
    return this.prisma.pedido.update({
      data: updatePedidoDto,
      where: {
        id: id
      }
    });
  }

  remove(id: number) {
    return this.prisma.pedido.delete({
      where: {
        id: id
      }
    });
  }
}
