// src/admin/admin.controller.ts
import { Controller, Get, Post, Put, Patch, Delete, Body, Param, Query } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';

@Controller('admin') // This sets the base URL to /admin
export class AdminController 
{
  constructor(private readonly adminService: AdminService) {}

  // Route 1: POST - Create a new user (@Body)
  @Post('users')
  createAdmin(@Body() createAdminDto: CreateAdminDto) 
  {
    return { message: 'Admin created', data: createAdminDto };
  }

  // Route 2: GET - Get all users with a filter (@Query)
  @Get('users')
  getAllUsers(@Query('role') role: string, @Query('limit') limit: number)
 {
    return `Returning ${limit} users with role: ${role}`;
}

  // Route 3: GET - Get a specific user by ID (@Param)
  @Get('users/:id')
  getUserById(@Param('id') id: string) 
  {
    return `Returning user with ID: ${id}`;
  }

  // Route 4: PUT - Completely replace a user's data (@Param, @Body)
  @Put('users/:id')
  updateUserFull(@Param('id') id: string, @Body() updateData: CreateAdminDto)
 {
    return `Fully updated user ${id}`;
  }

  // Route 5: PATCH - Partially update a user (e.g., just change their status)
  @Patch('users/:id/status')
  updateUserStatus(@Param('id') id: string, @Body('status') status: string) 
  {
    return `User ${id} status changed to ${status}`;
  }

  // Route 6: DELETE - Remove a user (@Param)
  @Delete('users/:id')
  deleteUser(@Param('id') id: string) 
  {
    return `User ${id} has been deleted`;
  }

  // Route 7: GET - Fetch system error logs (@Query)
  @Get('logs')
  getSystemLogs(@Query('date') date: string)
  {
    return `Fetching system logs for date: ${date}`;
  }

  // Route 8: POST - Send a global system alert (@Body)
  @Post('alert')
  sendSystemAlert(@Body('message') message: string) 
  {
    return `Alert broadcasted: ${message}`;
  }
}