import * as pkg_loader from "../../../core/loader/pkg_loader"
import * as pkg_engine from "../../../engine/pkg_engine"

/** 材质缓存 */
export class MaterialCache extends pkg_loader.BaseCache {
    /**
     * 销毁
     */
    public dispose(): void {
        pkg_engine.Asset().release(this._data)
        super.dispose()
    }
}