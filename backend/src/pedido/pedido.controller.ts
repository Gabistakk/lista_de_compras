import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { Prisma } from '@prisma/client'

@Controller('pedido')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Post()
  create(@Body() createPedidoDto: Prisma.PedidoCreateInput) {
    return this.pedidoService.create(createPedidoDto);
  }

  @Get()
  findAll() {
    return this.pedidoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pedidoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePedidoDto: Prisma.PedidoUpdateInput) {
    return this.pedidoService.update(+id, updatePedidoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedidoService.remove(+id);
  }
}
