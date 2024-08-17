  // create User
  export interface TUser {
    user_id: number;
    username: string;
    email: string;
    password: string;
    role: string;
    image_url: string;
}

  // Login User
  export interface Luser {
      username: string;
      password: string;
      role: string;
      token: string; 
     }

  // Login Response
  export interface LoginResponse {
        username: string;
        role: string;
        password: string;    
    }

export interface UserAuthenticatedState {
    user:{
        user_id: number
        username: string
        email: string
        role: string
        image_url: string
    } | null
    token: string | null
    isAuthenticated: boolean
    loading: boolean
    error: string | null
  }

  export interface UserState {
    user: TUser | null;
    loading: boolean;
    error: string | null;
  }

  // types.ts
export interface Task {
  id: string;
  title: string;
  status: string;
  completed: boolean;
  icon?: string;
}

export interface TasksState {
  selectedTask: Task | null;
  task: Task | null;
}

// types.ts
export interface Project {
  project_id: number;
  user_id: number;
  project_name: string;
  description: string;
  githubRepo: string | null;
  start_date: string | null;
  end_date: string | null;
  project_status: 'todo' | 'in_progress' | 'completed';
  created_at: string;
  updated_at: string;
}

export interface projectDetails {
  project : Project;
  tasks: Task;
}

export interface ProjectsState {
  selectedProject: Project | null;
  project: Project | null;
}