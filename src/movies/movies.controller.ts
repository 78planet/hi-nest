import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieServices: MoviesService) {}

  @Get()
  getAll() {
    return this.movieServices.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') movieId: number): Movie {
    return this.movieServices.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.movieServices.create(movieData);
  }

  @Delete(`/:id`)
  deleteOne(@Param('id') movieId: number) {
    return this.movieServices.deleteOne(movieId);
  }

  @Patch(`/:id`)
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.movieServices.update(movieId, updateData);
  }
}
