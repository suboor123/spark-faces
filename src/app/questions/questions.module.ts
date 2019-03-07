import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { QuestionsIndexComponent } from "../questions-index/questions-index.component";
import { QuestionsViewComponent } from "../questions-view/questions-view.component";
import { QuestionsNewComponent } from "../questions-new/questions-new.component";

@NgModule({
  declarations: [ QuestionsIndexComponent, QuestionsViewComponent, QuestionsNewComponent ],
  exports: [ QuestionsIndexComponent, QuestionsViewComponent, QuestionsNewComponent ],
  imports: [ FormsModule ]
})
export class QuestionsModule { }
