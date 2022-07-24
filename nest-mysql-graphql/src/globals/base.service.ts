import { Repository, FindOptionsRelations } from 'typeorm';

export interface IPagination {
  page?: number;
  size?: number;
}

export interface IPaginationResponse<T = any> {
  list: Array<T>;
  pagination: IPagination;
  total: number;
}

export interface IPaginationOptions {
  pagination?: IPagination;
  order?: object;
  where?: object;
  relations?: FindOptionsRelations<any>;
  select?: object;
}

export class BaseService {
  constructor(private readonly currentRepository: Repository<any>) {}
  async findListAndPage(
    options: IPaginationOptions,
  ): Promise<IPaginationResponse> {
    const DEFOULT_PAGE = 1;
    const DEFOULT_SIZE = 20;
    const {
      pagination = { page: DEFOULT_PAGE, size: DEFOULT_SIZE },
      order = {},
      where = {},
      relations = {},
      select = {},
    } = options || {};
    const { page = DEFOULT_PAGE, size = DEFOULT_SIZE } = pagination;
    const [list, total]: [Array<any>, number] =
      await this.currentRepository.findAndCount({
        take: size,
        skip: (page - 1) * size,
        order,
        where,
        relations,
        select,
      });
    return {
      list,
      pagination: {
        page,
        size,
      },
      total,
    };
  }
}
