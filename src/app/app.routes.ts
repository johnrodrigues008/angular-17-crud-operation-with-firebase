import { Routes } from '@angular/router';
import { ExpenseComponent } from './page/expense/expense.component';
import { ExpenseFormComponent } from './page/expense-form/expense-form.component';

export const routes: Routes = [
      { path: '', component: ExpenseComponent },
      { path: 'expense-form', component: ExpenseFormComponent },
      { path: 'expense-form/:id', component: ExpenseFormComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
];
