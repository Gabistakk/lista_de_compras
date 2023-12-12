import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [PedidoController],
  providers: [PedidoService],
})
export class PedidoModule {}
