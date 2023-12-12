import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { PedidoModule } from './pedido/pedido.module';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [CommonModule, PedidoModule, TagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
