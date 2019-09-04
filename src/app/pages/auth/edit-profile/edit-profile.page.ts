import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {NavController, LoadingController, ToastController, Platform} from '@ionic/angular';
import {AuthService} from 'src/app/services/auth.service';
import {Storage} from "@ionic/storage";
import {NgForm} from "@angular/forms";
import {AlertService} from "../../../services/alert.service";
import {StatusBar} from "@ionic-native/status-bar/ngx";
import {SplashScreen} from "@ionic-native/splash-screen/ngx";

// import {Camera, CameraOptions, PictureSourceType} from '@ionic-native/Camera/ngx';
// import {ActionSheetController} from '@ionic/angular';
// import {File, FileEntry} from '@ionic-native/File/ngx';
// import {HttpClient} from '@angular/common/http';
// import {WebView} from '@ionic-native/ionic-webview/ngx';
// import {FilePath} from '@ionic-native/file-path/ngx';
// import {finalize} from 'rxjs/operators';
import {EnvService} from "../../../services/env.service";

const STORAGE_KEY = 'my_images';

@Component({
    selector: 'app-edit-profile',
    templateUrl: './edit-profile.page.html',
    styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
    public user: any;
    images = [];

    constructor(
        // private camera: Camera,
        // private file: File,
        // private http: HttpClient,
        // private webview: WebView,
        // private actionSheetController: ActionSheetController,
        // private ref: ChangeDetectorRef,
        // private filePath: FilePath,
        private env: EnvService,
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        public navCtrl: NavController,
        public loadingCtrl: LoadingController,
        public toastCtrl: ToastController,
        private authService: AuthService,
        private storage: Storage,
        private alertService: AlertService
    ) {
        this.storage.get('user_info').then(
            data => {
                this.user = data;
            }
        );
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            // this.loadStoredImages();
        }).catch(() => {
        });
    }

    ngOnInit() {
    }

    /**
     * Check if images exist on Store
     */
    // loadStoredImages() {
    //     this.storage.get(STORAGE_KEY).then(images => {
    //         if (images) {
    //             let arr = JSON.parse(images);
    //             this.images = [];
    //             for (let img of arr) {
    //                 let filePath = this.file.dataDirectory + img;
    //                 let resPath = this.pathForImage(filePath);
    //                 this.images.push({name: img, path: resPath, filePath: filePath});
    //             }
    //         }
    //     });
    // }
    // pathForImage(img) {
    //     if (img === null) {
    //         return '';
    //     } else {
    //         let converted = this.webview.convertFileSrc(img);
    //         return converted;
    //     }
    // }
    //
    // async presentToast(text) {
    //     const toast = await this.toastCtrl.create({
    //         message: text,
    //         position: 'bottom',
    //         duration: 3000
    //     });
    //     toast.present();
    // }
    //
    // async selectImage() {
    //     const actionSheet = await this.actionSheetController.create({
    //         header: "Select Image source",
    //         buttons: [{
    //             text: 'Load from Library',
    //             handler: () =>
    //     {
    //         this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
    //     }
    // },
    //     {
    //         text: 'Use Camera',
    //             handler: () =>
    //         {
    //             this.takePicture(this.camera.PictureSourceType.CAMERA);
    //         }
    //     }
    // ,
    //     {
    //         text: 'Cancel',
    //             role
    //     :
    //         'cancel'
    //     }
    // ]
    // })
    //     ;
    //     await actionSheet.present();
    // }
    //
    // takePicture(sourceType: PictureSourceType) {
    //     var options: CameraOptions = {
    //         quality: 100,
    //         sourceType: sourceType,
    //         saveToPhotoAlbum: false,
    //         correctOrientation: true
    //     };
    //
    //     this.camera.getPicture(options).then(imagePath => {
    //         if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
    //             this.filePath.resolveNativePath(imagePath)
    //                 .then(filePath => {
    //                     let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
    //                     let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
    //                     this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
    //                 });
    //         } else {
    //             var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
    //             var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
    //             this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
    //         }
    //     });
    //
    // }
    //
    // createFileName() {
    //     var d = new Date(),
    //         n = d.getTime(),
    //         newFileName = n + ".jpg";
    //     return newFileName;
    // }
    //
    // copyFileToLocalDir(namePath, currentName, newFileName) {
    //     this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
    //         this.updateStoredImages(newFileName);
    //     }, error => {
    //         this.presentToast('Error while storing file.');
    //     });
    // }
    //
    // updateStoredImages(name) {
    //     this.storage.get(STORAGE_KEY).then(images => {
    //         let arr = JSON.parse(images);
    //         if (!arr) {
    //             let newImages = [name];
    //             this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
    //         } else {
    //             arr.push(name);
    //             this.storage.set(STORAGE_KEY, JSON.stringify(arr));
    //         }
    //
    //         let filePath = this.file.dataDirectory + name;
    //         let resPath = this.pathForImage(filePath);
    //
    //         let newEntry = {
    //             name: name,
    //             path: resPath,
    //             filePath: filePath
    //         };
    //
    //         this.images = [newEntry, ...this.images];
    //         this.ref.detectChanges(); // trigger change detection cycle
    //     });
    // }
    //
    // deleteImage(imgEntry, position) {
    //     this.images.splice(position, 1);
    //
    //     this.storage.get(STORAGE_KEY).then(images => {
    //         let arr = JSON.parse(images);
    //         let filtered = arr.filter(name => name != imgEntry.name);
    //         this.storage.set(STORAGE_KEY, JSON.stringify(filtered));
    //
    //         var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);
    //
    //         this.file.removeFile(correctPath, imgEntry.name).then(res => {
    //             this.presentToast('File removed.');
    //         });
    //     });
    // }
    //
    // startUpload(imgEntry) {
    //     this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
    //         .then(entry => {
    //             (< FileEntry > entry).file(file => this.readFile(file))
    //         })
    //         .catch(err => {
    //             this.presentToast('Error while reading file.');
    //         });
    // }
    //
    // readFile(file: any) {
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         const formData = new FormData();
    //         const imgBlob = new Blob([reader.result], {
    //             type: file.type
    //         });
    //         formData.append('file', imgBlob, file.name);
    //         this.uploadImageData(formData);
    //     };
    //     reader.readAsArrayBuffer(file);
    // }
    //
    // async uploadImageData(formData: FormData) {
    //     let loading = await this.loadingCtrl.create({
    //         message: 'Uploading image...',
    //     });
    //     await loading.present();
    //
    //
    //     this.http.post(`${this.env.API_URL}api/upload-avatar`, formData)
    //         .pipe(
    //             finalize(() => {
    //                 loading.dismiss();
    //             })
    //         )
    //         .subscribe(res => {
    //             if (res['success']) {
    //                 this.presentToast('File upload complete.')
    //             } else {
    //                 this.presentToast('File upload failed.')
    //             }
    //         });
    // }

    /**
     * Edit User Function
     * @param {NgForm} form
     * @returns {Promise<void>}
     */
    async editUser(form: NgForm) {
        const loader = await this.loadingCtrl.create({
            duration: 2000
        });

        if (form.value.first_name.trim() === '') {
            form.value.first_name = this.user.first_name;
        }
        if (form.value.last_name.trim() === '') {
            form.value.last_name = this.user.last_name;
        }
        if (form.value.user_name.trim() === '') {
            form.value.user_name = this.user.user_name;
        }
        if (form.value.email.trim() === '') {
            form.value.email = this.user.email;
        }
        this.authService.editUser(form.value.first_name, form.value.last_name, form.value.user_name, form.value.email, form.value.password, form.value.password_confirmation).subscribe(
            data => {
                if (data['success'] == true) {
                    this.alertService.presentToast('Edit Success! Please login again');
                    this.authService.logout();
                }
                else {

                    if (data['error']['email']) {
                        this.alertService.presentToast(data['error']['email']);
                        return false;
                    }
                    if (data['error']['password']) {
                        this.alertService.presentToast(data['error']['password']);
                        return false;
                    }
                    this.alertService.presentToast('This email address already use. Please enter a different email address or try logging in.');
                    return false;
                }
            },
            error => {
                console.log(error);
            },
            () => {

            }
        );
    }
};
