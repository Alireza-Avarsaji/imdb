import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCommentDialogComponent } from './upload-comment-dialog.component';

describe('UploadCommentDialogComponent', () => {
  let component: UploadCommentDialogComponent;
  let fixture: ComponentFixture<UploadCommentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadCommentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCommentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
