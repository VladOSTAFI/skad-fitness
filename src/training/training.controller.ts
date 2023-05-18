import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { TrainingService } from "./training.service";
import { createTrainingDto } from "./dto/create-training.dto";
import { TrainingDocument } from "./schemas/training.schema";

@Controller('training')
export class TrainingController {
    constructor(private readonly trainingService: TrainingService) {}
    @Post()
    createTraining(@Body() createTrainingDto: createTrainingDto) {

    };

    @Get()
    getAllTraining() {};

    @Put(':id')
    updateTraining() {};

    @Delete(':id')
    deleteTraining() {};
}